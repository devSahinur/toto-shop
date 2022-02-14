import NextAuth from "next-auth";
// dbConnect
import dbConnect from "/lib/dbConnect";
// Providers
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
// Model
import User from "../../../models/User";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await dbConnect();
      const checkUser = await User.findOne({
        name: user.name,
        email: user.email,
        provider: account.provider,
      });
      if (checkUser) {
        return true; // user db
      } else {
        user.provider = account.provider;
        await User.create(user);
        return true;
      }
    },
  },
});
