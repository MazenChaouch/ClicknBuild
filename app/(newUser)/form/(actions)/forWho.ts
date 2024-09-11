"use server";

import { getFormByUserId, updateForm, updateFormStatusById } from "@/data/form";
import { currentUser } from "@/lib/currentUser";
import { forWhoSchema } from "@/schema";
import { z } from "zod";

export const updateFormAction = async (
  formData: z.infer<typeof forWhoSchema>,
) => {
  try {
    const validatedData = forWhoSchema.parse(formData);

    const user = await currentUser();
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }

    const existingForm = await getFormByUserId(user.id);

    if (existingForm?.forWho) {
      await updateFormStatusById(user.id, "type");
      console.log("updated status to type");
    }

    await updateForm(user.id, { status: "type", forWho: validatedData.forWho });
    console.log("updated form with forWho data");
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      throw new Error("Invalid form data");
    }

    if (error instanceof Error) {
      console.error("Error updating form:", error.message);
      throw new Error("Failed to update form");
    }

    console.error("Unknown error:", error);
    throw new Error("An unexpected error occurred");
  }
};
