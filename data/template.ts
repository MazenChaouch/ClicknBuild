"use server";
import { db } from "@/lib/db";

export const getAllTemplate = async () => {
  try {
    const templates = await db.templates.findMany();
    return templates;
  } catch {
    return null;
  }
};
export const getAllTemplateTypes = async () => {
  try {
    const types = await db.templates.findMany({
      select: { type: true },
      distinct: ["type"],
    });
    console.log(types);
    return types;
  } catch {
    return null;
  }
};
export const getTemplatesByType = async (type: string) => {
  try {
    const templates = await db.templates.findMany({
      where: { type },
    });
    return templates;
  } catch {
    return null;
  }
};
