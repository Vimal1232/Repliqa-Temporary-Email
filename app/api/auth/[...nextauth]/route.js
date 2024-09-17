import { dbConnect } from "@/db/dbConfig";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/UserModel";


export const Authoptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;

        await dbConnect();

        const user = await User.findOne({ UserName: username });

        if (!user) {
          return null;
        }

        const PassowrdMatch = await bcrypt.compare(password, user.Password);

        if (!PassowrdMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/signIn",
    signOut: "/",
  },
};

const handler = NextAuth(Authoptions);

export { handler as GET, handler as POST };
