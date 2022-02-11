import dbConnect from "../../lib/dbConnect"
import Product from "../../models/Product"

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case "GET":
      // Get all items that sellerId sold
      try {
        const sellerId = req.query.sellerId
        const productLeanResponse = await Product.find({ sellerId }, { color: 0 })
          .sort({ _id: -1 })
          .lean()
        res.status(200).json({ Product: productLeanResponse })
      } catch (err) {
        res.status(404).json({ success: false })
      }
      break
    case "POST":
      try {
        const data = req.body
        const dbResponse = await Product.create(data)
        await Product.findByIdAndUpdate(dbResponse._id, {
          id: dbResponse._id.toString(),
        })
        res.status(200).json()
      } catch (err) {
        res.status(400).json({ success: false })
      }
      break
    case "PUT":
      try {
        const data = req.body
        await Product.findOneAndUpdate({ id: data._id }, { ...data })
        res.status(200).json()
      } catch (err) {
        res.status(400).json({ success: false })
      }
      break
    case "DELETE":
      try {
        const itemId = req.query.itemId
        await Product.findOneAndDelete({ id: itemId })
        res.status(200).json()
      } catch (err) {
        res.status(400).json({ success: false })
      }
      break
  }
}
