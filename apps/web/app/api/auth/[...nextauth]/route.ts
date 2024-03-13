import NextAuth from "next-auth/next";
import { authOptions } from "@repo/auth";

const handler = NextAuth(
  authOptions({
    enabledProviders: ["github"],
  }),
);

export { handler as GET, handler as POST };
