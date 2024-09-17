"use server";

import { db } from "@/lib/db";
import { configSchema } from "@/schema";
import { z } from "zod";

export const configAction = async (
  data: z.infer<typeof configSchema>,
  myTemplateId: string,
) => {
  const validData = configSchema.safeParse(data);

  if (!validData.success) {
    throw new Error("Invalid data");
  }
  const { name, domain } = validData.data;
  await db.userTemplate.update({
    where: {
      id: myTemplateId,
    },
    data: {
      name,
      domain,
    },
  });
  return { success: "Configuration saved!" };
};
