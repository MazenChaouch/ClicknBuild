"use server";
import { db } from "@/lib/db";
import { formStatus } from "@prisma/client";

export const getFormStatusById = async (userId: string) => {
  try {
    const Form = await db.form.findFirst({ where: { userId } });
    if (!Form) {
      return null;
    }
    return Form.status;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getFormByUserId = async (userId: string) => {
  try {
    const Form = await db.form.findFirst({ where: { userId } });
    return Form;
  } catch (error) {
    return null;
  }
};

export const updateFormStatusById = async (
  userId: string,
  status: formStatus,
) => {
  try {
    await db.form.update({
      where: { userId },
      data: { status },
    });
  } catch (error) {
    return null;
  }
};
export const updateForm = async (userId: string, data: any) => {
  try {
    await db.form.update({
      where: { userId },
      data,
    });
  } catch (error) {
    return null;
  }
};
