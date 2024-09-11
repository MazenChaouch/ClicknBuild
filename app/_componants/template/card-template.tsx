import { template } from "@/types";
import Image from "next/image";
import React from "react";
interface CardTemplateProps {
  template: template;
  setSelector: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined;
}
export const CardTemplate = ({
  template,
  selected,
  setSelector,
}: CardTemplateProps) => {
  return (
    <div
      onClick={() => setSelector(template.id)}
      className={`flex h-fit flex-col justify-between p-1 ${selected == template.id && "rounded-lg border-2 border-[#4A3AFF]"}`}
    >
      <Image
        src={template.image}
        alt={template.name}
        className="h-full rounded-lg object-cover"
        width={300}
        height={200}
      />
      <p className="text-base font-semibold uppercase text-black">
        {template.name}
      </p>
    </div>
  );
};
