import mongoose from "mongoose";

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
    default: "",
  },
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
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
