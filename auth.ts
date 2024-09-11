import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { getAccountByUserId } from "./data/account";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/sign-in",
    signOut: "/logout",
    error: "/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      const existingUser = await getUserById(user.id!);
      if (!existingUser) return false;

      if (account?.provider !== "credentials") {
        const form = await db.form.findFirst({
          where: {
            userId: existingUser.id,
          },
        });
        if (!form) {
          await db.form.create({
            data: {
              userId: existingUser.id,
              status: "forWho",
            },
          });
          return true;
        }
      }

      if (!existingUser.email) return false;

      if (!existingUser.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twofactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );
        if (!twofactorConfirmation) return false;
        if (twofactorConfirmation) {
          await db.twoFactorConfirmation.delete({
            where: {
              userId: existingUser.id,
            },
          });
        }
      }
      return true;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.twofactor && session.user) {
        session.user.twofactor = !!token.twofactor;
      }
      if (token.provider && session.user) {
        session.user.provider = token.provider as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      const account = await getAccountByUserId(token.sub);
      if (account) {
        token.provider = account.provider;
      }
      if (existingUser?.isTwoFactorEnabled) {
        token.twofactor = true;
      }
      if (!existingUser) return token;

      token.twofactor = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
