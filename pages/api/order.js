// Database
import dbConnect from "./../../lib/dbConnect";
import Order from "./../../models/order";
import { getSession } from "next-auth/react";
// mongoose lib
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;
  const userSession = await getSession({ req });
  if (userSession === null) {
    res.status(401).json({ Website: "Login first then data will be given 😃" });
  } else {
    const { user } = userSession;

    switch (method) {
      case "GET":
        // Get all items that sellerId sold
        try {
          const email = user?.email;
          const OrderData = await Order.find({ email }).sort({ _id: -1 }).lean();
          res.status(200).json({ OrderHistory: OrderData });
        } catch (err) {
          res.status(404).json({ success: false });
        }
        break;
      case "PUT":
        try {
          const { userId } = req.query;
          const data = req.body;
          const id = mongoose.Types.ObjectId(userId);
          await dbConnect();
          await Order.findByIdAndUpdate(id, { ...data });
          res.status(200).json({ success: true });
        } catch (err) {
          res.status(400).json({ success: false });
        }
        break;
    }
  }
}
