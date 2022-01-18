import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  },
  image:[],
  totalReviews: {
    type: Number,
    default: 0,
  },
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
    default: 20,
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
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema);
