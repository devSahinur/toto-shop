import dbConnect from "./../../../lib/dbConnect";
import Product from "./../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const data = await Product.find();
        res.status(200).json({ data });
      } catch (error) {
        res
          .status(400)
          .send({ error: "error, GET method for purchaseHistory api" });
      }
      break;
    case "POST":
      try {
        const product = req.body;
        // const filter = { name: user.name, email: user.email }
        // const update = { $push: { purchaseHistory: req.body } }
        // console.log(product)
        await Product.create(product);

        res.status(200).json({ product });
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

        await Product.findOneAndUpdate(filter, update);

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
