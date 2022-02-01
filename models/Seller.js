import mongoose from "mongoose"

const SellerSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  id: String, // Seller ID
  storeName: { type: String, required: true },
  storeEmail: { type: String, required: true },
  storeImage: { type: String, required: true },
})

module.exports =
  mongoose.models.Seller || mongoose.model("Seller", SellerSchema)
