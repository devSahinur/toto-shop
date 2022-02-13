import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }, // username
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  customName: {
    type: String,
    unique:true,
    default: "",
  }, // Firstname-Lastname 
  provider: {
    type: String,
    required: true,
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
  sellerId: String,
  address: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  cart: [
    {
      itemID: { type: String, ref: "Item" },
      quantity: Number,
      isConfirm: Boolean,
    },
  ],
  wishlist: [],
  purchaseHistory: [
    {
      _id: false,
      itemID: String,
      name: String,
      image: String,
      price: Number,
      sellerName: String,
      sellerID: String,
      quantity: Number,
      isRating: { type: Boolean, default: false },
      orderAt: { type: Date, default: Date.now },
    },
  ],
})

module.exports = mongoose.models.User || mongoose.model("User", UserSchema)