"use server";

import { getFormByUserId, updateForm, updateFormStatusById } from "@/data/form";
import { currentUser } from "@/lib/currentUser";
import { NameSchema } from "@/schema";
import { z } from "zod";

export const updateFormAction = async (
  formData: z.infer<typeof NameSchema>,
) => {
  try {
    const validatedData = NameSchema.parse(formData);

    const user = await currentUser();
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }

    const existingForm = await getFormByUserId(user.id);

    if (existingForm?.name) {
      await updateFormStatusById(user.id, "template");
      console.log("updated status to template");
    }

    await updateForm(user.id, {
      status: "template",
      name: validatedData.name,
    });
    console.log("updated form with name data");
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
