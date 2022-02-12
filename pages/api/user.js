// Database
import dbConnect from "./../../lib/dbConnect";
import User from "./../../models/User";
import Product from "./../../models/Product";
import Seller from "./../../models/Seller";
import { getSession } from "next-auth/react";
// mongoose lib
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;
  const userSession = await getSession({ req });
  if (userSession === null) {
    res.status(401).json({ Website: "Login first then data will be given 😃" });
  } else {
    const { user } = userSession;

    switch (method) {
      case "GET":
        // Get all items that sellerId sold
        try {
          const email = user?.email;
          const UserData = await User.find({ email }).sort({ _id: -1 }).lean();
          res.status(200).json({ Login: UserData });
        } catch (err) {
          res.status(404).json({ success: false });
        }
        break;
      case "PUT":
        try {
          const { userId } = req.query;
          const data = req.body;
          const id = mongoose.Types.ObjectId(userId);
          await dbConnect();
          await User.findByIdAndUpdate(id, { ...data });
          res.status(200).json({ success: true });
        } catch (err) {
          res.status(400).json({ success: false });
        }
        break;
      case "DELETE":
        try {
          const userId = req.query.userId;
          const { sellerId } = req.body;
          await dbConnect();
          const id = mongoose.Types.ObjectId(userId);
          await User.findByIdAndDelete(id);
          if (!!sellerId) {
            await Product.deleteMany({ sellerId });
            await Seller.findOneAndDelete({ id: sellerId });
          }
          res.status(200).json({ success: true });
        } catch (err) {
          res.status(400).json({ success: false });
        }
        break;
    }
  }
}
