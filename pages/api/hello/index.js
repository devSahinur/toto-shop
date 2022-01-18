// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "./../../../lib/dbConnect";
import Item from "./../../../models/Item";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const data = await Item.find();
        res.status(200).json({ data });
      } catch (error) {
        res
          .status(400)
          .send({ error: "error, GET method for purchaseHistory api" });
      }
      break;
    case "POST":
      try {
        const hell = req.body;
        // const filter = { name: user.name, email: user.email }
        // const update = { $push: { purchaseHistory: req.body } }

        await Item.create(hell);

        res.status(200).json({ success: hell });
      } catch (error) {
        res
          .status(400)
          .send({ error: "error, POST method for purchaseHistory api" });
      }
      break;
    case "PUT":
      try {
        const filter = {
          name: user.name,
          email: user.email,
          "purchaseHistory.itemID": req.body,
        };
        const update = {
          $set: {
            "purchaseHistory.$.isRating": true,
          },
        };

        await User.findOneAndUpdate(filter, update);

        res.status(200).json();
      } catch (error) {
        res
          .status(400)
          .send({ error: "error, POST method for purchaseHistory api" });
      }
      break;
    default:
      res.status(400);
      break;
  }
}
