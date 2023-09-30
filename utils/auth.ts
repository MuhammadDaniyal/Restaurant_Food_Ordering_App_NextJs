import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./connect";

// Typescript combines both definitions default interface, user define interface into a single interface so that we'll have access to both properties.

// update session interface totally new one session interface with the addition of admin property in user
declare module "next-auth" {
  interface Session { // declare new session tyoe here
    user: User & {
      isAdmin: Boolean;
    };
  }
}
// update JWT interface totally new one JWT interface with the addition of admin property
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // we are going to check user token
  },
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID as string, // we sure that it's a string
      // clientSecret: process.env.GOOGLE_SECRET as string,
      clientId: process.env.GOOGLE_ID!, // its string or undefined but sure that its a string
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    // i am going return here a new session with add a admin property in session.user
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin; // abhi token ma isAdmin ki value ni woh JWT callback sy ayegi JWT Callback pehla run hota hy session callback sy
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email!, // ! means sure value hy 
        },
      });
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    },
  },
};

// useSession working only client side component but getServerSession works server side and api's too to fetch user ka session ka data and status
export const getAuthSession = () => getServerSession(authOptions); // using this func get user and status in server side components and apis
