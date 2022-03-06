import dbConnect from "./../../../lib/dbConnect";
import BlogPost from "./../../../models/BlogPost";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const data = await BlogPost.find();
        res.status(200).json({ data });
      } catch (error) {
        res.status(400).send({ error: "error, GET method for BlogPost api" });
      }
      break;
    case "POST":
      try {
        const post = req.body;
        await BlogPost.create(post);

        res.status(200).json({ BlogPost });
      } catch (error) {
        res.status(400).send({ error: "error, POST method for blogPost api" });
      }
      break;
    default:
      res.status(400);
      break;
  }
}
