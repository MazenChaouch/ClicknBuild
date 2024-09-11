import { getAllTemplate, getAllTemplateTypes } from "@/data/template";
import { CardTemplate } from "./card-template";
interface ListTemplatesProps {
  types: string[];
  count: number;
}

export const ListTemplates = async ({ count }: ListTemplatesProps) => {
  const templates = await getAllTemplate();
  const types = await getAllTemplateTypes();
  console.log(types);
  return (
    <div className="grid h-fit w-full grid-cols-5 gap-4">
      {templates!.slice(0, count).map((template, index) => (
        <CardTemplate
          key={index}
          name={template.name}
          price={template.price}
          image={template.image}
          by={template.by}
        />
      ))}
    </div>
  );
};
