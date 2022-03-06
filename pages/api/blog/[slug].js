import dbConnect from "./../../../lib/dbConnect";
import BlogPost from "./../../../models/BlogPost";
dbConnect();

export default async (req, res) => {
  const {
    query: { slug },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const product = await BlogPost.findById(slug);

        if (!product) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const post = await BlogPost.findByIdAndUpdate(slug, req.body, {
          new: true,
          runValidators: true,
        });

        if (!post) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedPost = await BlogPost.deleteOne({ slug: slug });

        if (!deletedPost) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
