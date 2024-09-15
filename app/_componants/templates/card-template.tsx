import Image, { StaticImageData } from "next/image";
interface CardTemplateProps {
  name: string;
  by: string;
  image: StaticImageData | string;
  price: string;
}
export const CardTemplate = ({ name, by, image, price }: CardTemplateProps) => {
  return (
    <div className="flex h-fit w-full flex-col">
      <Image
        src={image}
        alt="temp1"
        className="rounded-xl border border-black"
        width={500}
        height={200}
      />
      <div className="flex items-center justify-between pt-6">
        <p className="font-semibold">{name}</p>
        <p className="text-sm font-semibold text-sky-500">{price}</p>
      </div>
      <p className="text-sm">{by}</p>
    </div>
  );
};
