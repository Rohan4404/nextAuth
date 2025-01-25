// import "next-auth";
// import { DefaultSession } from "next-auth";

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessage?: boolean;
    name: string | null;
  }

  interface Session {
    user: User;
  }
}
