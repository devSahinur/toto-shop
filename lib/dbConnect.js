import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    "Please define MONGODB_URI environment variable inside .env.local"
  )
}

let cache = global.mongoose

if (!cache) {
  cache = global.mongoose = { conn: null, promise: null }
}

export default async function dbConnect() {
  if (cache.conn) {
    return cache.conn
  }

  if (!cache.promise) {
    const opt = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    cache.promise = await mongoose.connect(MONGODB_URI, opt)
  }

  cache.conn = await cache.promise

  return cache.conn
}
