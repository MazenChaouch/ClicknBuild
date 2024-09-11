"use server";

import { getFormByUserId, updateForm, updateFormStatusById } from "@/data/form";
import { currentUser } from "@/lib/currentUser";
import { TypeSchema } from "@/schema";
import { z } from "zod";

export const updateFormAction = async (
  formData: z.infer<typeof TypeSchema>,
) => {
  try {
    const validatedData = TypeSchema.parse(formData);

    const user = await currentUser();
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }

    const existingForm = await getFormByUserId(user.id);

    if (existingForm?.type) {
      await updateFormStatusById(user.id, "name");
      console.log("updated status to name");
    }

    await updateForm(user.id, { status: "name", type: validatedData.type });
    console.log("updated form with type data");
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
