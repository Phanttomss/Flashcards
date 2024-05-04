import { z } from "zod";

const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters.",
    })
    .max(20, {
      message: "Username must be less than 20 characters.",
    }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(16, {
      message: "Password must be less than 16 characters.",
    }),
});

const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(16, {
      message: "Password must be less than 16 characters.",
    }),
});

export { RegisterSchema, LoginSchema };
