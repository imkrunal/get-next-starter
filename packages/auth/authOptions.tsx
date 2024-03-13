import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@repo/database";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { OAuthProviderType, Provider } from "next-auth/providers/index";

export interface AuthOptionsProps {
  enabledProviders: Array<OAuthProviderType>;
}

export const authOptions = ({
  enabledProviders,
}: AuthOptionsProps): NextAuthOptions => {
  const providers: Provider[] = [];

  if (enabledProviders.includes("github")) {
    providers.push(
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      }),
    );
  }

  if (enabledProviders.includes("google")) {
    providers.push(
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    );
  }

  return {
    adapter: DrizzleAdapter(db) as any,
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login",
    },
    session: {
      strategy: "jwt",
    },
    providers,
  };
};
