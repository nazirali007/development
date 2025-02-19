import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;
type IsAdmin = boolean;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    isAdmin: IsAdmin;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      isAdmin: IsAdmin;
    };
  }
}
