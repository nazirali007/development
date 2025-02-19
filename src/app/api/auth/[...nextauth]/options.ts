import prismadb from "@/lib/prismadb";
import { User } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredentials() {
  const clientId = "process.env.GOOGLE_CLIENT_ID"!;
  const clientSecret = "process.env.GOOGLE_CLIENT_SECRET"!;

  if (!clientId || clientId.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_ID");
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET");
  }

  return { clientId, clientSecret };
}

export const options: NextAuthOptions = {
  secret: "test",
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }
      await prismadb.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name,
          //@ts-expect-error not exsist problem
          avatar: profile.picture,
        },
        update: {
          //@ts-expect-error not exsist problem
          avatar: profile.picture,
        },
      });
      return true;
    },
    jwt: async ({ token, user }) => {
      const dbUser = (await prismadb.user.findUnique({
        //@ts-expect-error unknow and undefined problem
        where: { email: token.email },
      })) as User | null;
      if (!dbUser) {
        token.id = user.id;
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.avatar,
        phone: dbUser.phone,
        isAdmin: dbUser.isAdmin,
      };
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  debug: true,
};
