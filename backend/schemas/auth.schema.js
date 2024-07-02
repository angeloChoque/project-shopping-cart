import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string({ required_error: "userName is required" }),
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "invalid email" }),
  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const loginSchema = z.object({
    email: z
      .string({ required_error: "email is required" })
      .email({ message: "invalid email" }),
    password: z
      .string({ required_error: "password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
  });
