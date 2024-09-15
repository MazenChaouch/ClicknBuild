import { template } from "@/types";
import Image from "next/image";
import Link from "next/link";
interface CardTemplateProps {
  template: template;
}
export const CardTemplate = ({ template }: CardTemplateProps) => {
  return (
    <Link href={template.link} className="flex h-fit w-full flex-col">
      <Image
        src={template.image}
        alt="temp1"
        className="rounded-xl border border-black"
        width={500}
        height={200}
      />
      <div className="flex items-center justify-between pt-6">
        <p className="font-semibold">{template.name}</p>
        <p className="text-sm font-semibold text-sky-500">{template.price}</p>
      </div>
      <p className="text-sm">{template.by}</p>
    </Link>
  );
};
