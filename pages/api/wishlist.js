import dbConnect from "./../../lib/dbConnect"
import User from "./../../models/User"
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  const { method } = req
  const userSession = await getSession({ req })

  if (userSession === null) {
    res.status(401)
  } else {
    await dbConnect()
    const { user } = userSession

    switch (method) {
      case "POST":
        try {
          console.log(user)
          const itemID = req.body.itemID
          const filter = { name: user.name, email: user.email }
          const update = {
            $addToSet: {
              wishlist: itemID,
            },
          }
          await User.findOneAndUpdate(filter, update)

          res.status(200).json({ success: true })
        } catch (error) {
          res.status(405).send({ error: "error, POST method for wishlist api" })
        }
        break
      case "GET":
        try {
          const filter = { name: user.name, email: user.email }
          const data = await User.findOne(filter, "wishlist -_id")

          res.status(200).json(data.wishlist)
        } catch (error) {
          res.status(405).send({ error: "error, GET method for wishlist api" })
        }
        break
      case "DELETE":
        try {
          const itemID = req.body.itemID
          const filter = { name: user.name, email: user.email }
          const update = {
            $pull: { wishlist: itemID },
          }

          await User.findOneAndUpdate(filter, update)
          res.status(200).json({ success: true })
        } catch (error) {
          res
            .status(405)
            .send({ error: "error, DELETE method for wishlist api" })
        }

      default:
        res.status(405)
        break
    }
  }

}
