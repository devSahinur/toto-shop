import Product from "./../models/Product"
import dbConnect from "./dbConnect"

export default async function querySearch(
  keyword,
  category,
  minprice,
  maxprice,
  sortby
) {
  await dbConnect()

  // ============================ Dynamic query condition ============================
  const query = {
    ...(keyword && { title: { $regex: keyword, $options: "i" } }),
    ...(category && { category }),
    ...(minprice && { price: { $gte: parseFloat(minprice) } }),
    ...(maxprice && { price: { $lte: parseFloat(maxprice) } }),
    ...(!!minprice &&
      !!maxprice && {
        $and: [
          { price: { $gte: parseFloat(minprice) } },
          { price: { $lte: parseFloat(maxprice) } },
        ],
      }),
  }

  // ================================= Sort condition =================================
//   let sort = null
//   if (sortby === "Latest") {
//     sort = { _id: -1 }
//   } else if (sortby === "Price low to high") {
//     sort = { price: 1 }
//   } else if (sortby === "Price high to low") {
//     sort = { price: -1 }
//   }

  const itemList = await Product.aggregate([
    { $match: query },
    {
      $project: {
        _id: 1,
        title: 1,
        price: 1,
        shortDescription:1,
        image: { $arrayElemAt: ["$image", 0] },
        // review_count: { $size: "$reviews" },
        avg_rating: { $round: [{ $avg: "$reviews.rating" }, 1] },
      },
    },
    // sort && { $sort: sort },
    // {
    //   $project: {
    //     _id: 0,
    //   },
    // },
  ])

  return itemList
}
