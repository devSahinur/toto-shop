import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: { type: String },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: [],
  reviews: [
    { _id: false, userName: String, userImage: String, rating: Number },
  ],
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  totalQuantity: {
    type: Number,
    default: 10,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    default: "Artificial Leather",
  },
  color: {
    type: String,
    default: "Black, Brown, Red",
  },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
