import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

import { LoginSchema } from "@/lib/schemas"
import { GetUserByEmail } from "./data/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedData = LoginSchema.safeParse(credentials)

        if (!validatedData.success) {
          return null
        }

        const { email, password} = validatedData.data

        const user = await GetUserByEmail(email);

        if (!user || !user.password) {
          return null
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
          return user;
        }

        return null;
      },
    }),
  ],
})