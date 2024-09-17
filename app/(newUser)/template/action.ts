"use server";
import { getFormByUserId, updateForm } from "@/data/form";
import { getTemplatesByType } from "@/data/template";
import { currentUser } from "@/lib/currentUser";
import { db } from "@/lib/db";

export const getTemplates = async () => {
  try {
    const session = await currentUser();
    const form = await getFormByUserId(session?.id!);
    const tempTemplates = await getTemplatesByType(form?.type!);
    return tempTemplates;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const addUserTemplate = async (templateId: string, name: string) => {
  const formatString = (input: string): string => {
    return input.replace(/\s+/g, "").toLowerCase();
  };
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not found");
    }
    await db.userTemplate.create({
      data: {
        userId: user?.id!,
        templateId: templateId,
        domain: formatString(name),
        name: name,
      },
    });
    console.log("User template added");
    await updateForm(user.id!, {
      status: "completed",
    });
    console.log("Form updated");
    return;
  } catch (error) {
    return null;
  }
};
