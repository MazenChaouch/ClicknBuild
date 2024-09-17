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
export const getTemplateById = async (id: string) => {
  try {
    const template = await db.templates.findFirst({
      where: { id },
    });
    return template;
  } catch {
    return null;
  }
};
export const getMyTemplateByUserId = async (userId: string) => {
  try {
    const userTemplates = await db.userTemplate.findFirst({
      where: { userId },
    });

    return userTemplates;
  } catch {
    return null;
  }
};
export const getMyTemplate = async (id: string) => {
  try {
    const template = await db.userTemplate.findFirst({
      where: { id },
    });
    return template;
  } catch {
    return null;
  }
};
