import dbConnect from "../../../lib/dbConnect";
import Item from "../../../models/Item";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  // const id = req.param.id
  console.log(id)

  switch (method) {
    case "GET":
      try {
        const item = await Item.findById(id);

        if (!item) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const item = await Item.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!item) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedItem = await Item.deleteOne({ _id: id });

        if (!deletedItem) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
