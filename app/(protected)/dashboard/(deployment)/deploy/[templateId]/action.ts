"use server";

import { db } from "@/lib/db";

export const deployAction = async (myTemplateId: string) => {
  await db.userTemplate.update({
    where: {
      id: myTemplateId,
    },
    data: {
      deployment: true,
    },
  });
  return;
};
