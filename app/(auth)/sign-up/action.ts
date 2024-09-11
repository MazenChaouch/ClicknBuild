"use server";
import { signUpSchema } from "@/schema";
import { z } from "zod";
import { db } from "@/lib/db";
import bcryptjs from "bcryptjs";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/email";

export const signUpAction = async (data: z.infer<typeof signUpSchema>) => {
  const validData = signUpSchema.safeParse(data);

  if (!validData.success) {
    throw new Error("Invalid data");
  }
  const { name, email, password } = validData.data;
  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await db.user.findFirst({
    where: {
      email,
    },
  });
  if (existingUser) {
    return { error: "Email already exists" };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Confirmation email sent!" };
};
