import dbConnect from "../../lib/dbConnect";
import Product from "../../models/Product";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      // Get all items that sellerId sold
      try {
        const _id = req.query.id;
        const productLeanResponse = await Product.find({ _id })
          .sort({ _id: -1 })
          .lean();
        res.status(200).json({ Product: productLeanResponse });
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = req.body;
        const dbResponse = await Product.create(data);
        await Product.findByIdAndUpdate(dbResponse._id, {
          id: dbResponse._id.toString(),
        });
        res.status(200).json();
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
      case "PUT":
        try {
          const data = req.body
          await Product.findOneAndUpdate({ id: data.id }, { ...data })
          res.status(200).json()
        } catch (err) {
          res.status(400).json({ success: false })
        }
        break
    case "DELETE":
      try {
        const itemId = req.query.id;
        await Product.findOneAndDelete({ _id: itemId });
        res.status(200).json();
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
