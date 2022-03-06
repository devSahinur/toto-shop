import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    like: [],
    comment: [],
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
