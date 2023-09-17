import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth/next";

// every nextjs route is something known as serverless route

// handle authentication
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
