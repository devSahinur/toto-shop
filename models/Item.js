import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema({
  id: String,
  name: String, 
})

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema)