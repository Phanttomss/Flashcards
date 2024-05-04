"use server";

import { z } from "zod";

import { LoginSchema } from "@/lib/schemas";

export async function Login(data: z.infer<typeof LoginSchema>) {
  const validatedData = LoginSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Login Successfully TEST  " };
}
