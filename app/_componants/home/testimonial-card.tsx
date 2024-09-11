import Image, { StaticImageData } from "next/image";
import { Rating } from "./rating";

interface TestimonialCardProps {
  img: StaticImageData;
  fullName: string;
  position: string;
  rate: number;
  text: string;
}
export const TestimonialCard = ({
  img,
  fullName,
  position,
  rate,
  text,
}: TestimonialCardProps) => {
  return (
    <div className="relative p-8 flex flex-col justify-between h-full bg-[#2d5aff5e] w-4/5 gap-8">
      <Image src={img} alt="img" className="absolute size-16 -left-10" />
      <div className="w-full h-fit flex flex-col">
        <p className="text-[#252B42] text-xl font-bold">{fullName}</p>
        <p className="text-stone-500 font-bold">{position}</p>
      </div>
      <div className="flex flex-col gap-2 overflow-hidden">
        <Rating rate={rate} />
        <p className="h-[100px] text-sm font-bold text-stone-700">{text}</p>
      </div>
    </div>
  );
};
