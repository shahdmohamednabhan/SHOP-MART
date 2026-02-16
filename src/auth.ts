import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
// import Email from "next-auth/providers/email";
// import { json } from "stream/consumers";

export const authOption: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Route",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(values) {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify({
              email: values?.email,
              password: values?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const payload = await response.json();

        if (response.ok) {
          return {
            id: payload.user.email,
            user: payload.user,
            token: payload.token,
          };
        }

        throw new Error(payload.message);
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
        session.token = token.token;
      }
      return session;
    },
  },
};
