import { buffer } from "micro";
import * as admin from "firebase-admin";

//Secure connection to FIREBASE from the backend
const serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//Establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// dbConnect
import dbConnect from "./../../lib/dbConnect";
// Model
import Order from "../../models/order";

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  console.log("Fulfilling order ", session);
  await dbConnect();
  await Order.create({
    id: session.id,
    amount: session.amount_total / 100,
    amount_shipping: session.total_details.amount_shipping / 100,
    images: session.metadata.images,
    email: session.metadata.email,
  });

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success: order ${session.id} had been added to the DB`);
    });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }
    //Handle checkout
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    extraResolver: true,
  },
};
