import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  amount: String,
  amount_shipping: String,
  city: String,
  images: [],
});

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
