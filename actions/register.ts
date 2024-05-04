"use server";

import { z } from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/lib/schemas";
import { db } from "@/lib/db";

export async function Register(data: z.infer<typeof RegisterSchema>) {
  const validatedData = RegisterSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid fields" };
  }

  const { username, email, password } = validatedData.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Theres already a account using this email" };
  }

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Account created Successfully" };
}
