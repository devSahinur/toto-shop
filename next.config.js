module.exports = {
  images: {
    domains: [
      "i.ibb.co",
      "raw.githubusercontent.com",
      "lh3.googleusercontent.com",
      "fakestoreapi.com",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    host_url: process.env.HOST,
  },
};
