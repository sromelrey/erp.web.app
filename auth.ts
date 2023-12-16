import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import type { User } from "@/app/lib/types/definitions";
import { users } from "./app/lib/data";
import bcrypt from "bcrypt";

async function getUser(email: string): Promise<User | undefined | any> {
  try {
    const user = users.filter((user) => user.email === email);

    // Do something with the filtered user, e.g., console log it.
    return user[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("AUTH.TS IS RUNNING");

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        //* @parsedCredentials the data user provided
        console.log(parsedCredentials.success);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log(passwordsMatch, password, user.password);
          if (passwordsMatch) {
            // localStorage.setItem("user", user);
            return user;
          }
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
