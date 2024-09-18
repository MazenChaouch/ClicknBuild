import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Email is invalid",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  twofactor: z.optional(
    z
      .string()
      .min(1, {
        message: "Two factor code is required",
      })
      .max(6, {
        message: "Two factor code is invalid",
      }),
  ),
});

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "FullName is required" }).max(50),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(50)
    .email({ message: "Email is invalid" }),
  password: z.string().min(8, { message: "Password is too short" }).max(50),
});

export const forWhoSchema = z.object({
  forWho: z.ZodEnum.create(["myself", "client"], {
    required_error: "For who you are creating this website?",
  }),
});
export const types = [
  { label: "Portfolio", value: "Portfolio" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Online store", value: "Online store" },
] as const;

export const TypeSchema = z.object({
  type: z
    .string({
      required_error: "Please select a Type.",
    })
    .min(1, { message: "Please select a Type." }),
});
export const NameSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export const configSchema = z.object({
  name: z.string().min(1, { message: "website name is required" }),
  domain: z.string().min(1, { message: "domain is required" }),
});
