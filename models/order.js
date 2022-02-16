import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  amount: String,
  amount_shipping: String,
  city: String,
  country: String,
  line1: String,
  line2: String,
  postal_code: String,
  state: String,
  amount_discount_real: Number,
  amount_shipping_real: Number,
  amount_tax_real: Number,
  images: [],
});

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
