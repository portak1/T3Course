import { PrismaAdapter } from "@auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import bcrypt from "bcrypt"

import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "@/env";
import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      surname: string;
      // ...other properties
      // role: UserRole;
    };
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */

const AUTH_PAGES = {
  signIn: "/auth/signin",
  signOut: "/auth/signout",
  index: "/"
}
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user, token }) => {
      return {
      ...session,
    }},
    async jwt({ token }) {
      console.log(token)
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: AUTH_PAGES,
  adapter: PrismaAdapter(db) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials:{
        email: {label: "Email", type: "text"},
        password: {label: "Password", type: "password"}
      },  
      async authorize(credentials){    
        const user = await db.user.findFirst({
          where: {
            email: credentials?.email
          }
        })
        
        const isVerified = await bcrypt.compare(credentials?.password ?? "", user?.password ?? "")
        if(isVerified){
          console.log("User found", user) 
          return user
        }

        console.log("User not found")
        return null
      }
    })
    ]
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
