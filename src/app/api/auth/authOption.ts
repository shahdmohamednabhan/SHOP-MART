// src/app/api/auth/authOption.ts
import GithubProvider from "next-auth/providers/github";

export const authOption = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
};
