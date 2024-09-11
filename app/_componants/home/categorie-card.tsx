import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategorieCardProps {
  thumbnail: StaticImageData;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}
export const CategorieCard = ({
  thumbnail,
  icon,
  title,
  description,
  tags,
}: CategorieCardProps) => {
  return (
    <Link href="/blog">
      <div className="w-full h-fit bg-white/50 flex flex-col justify-between items-center px-10 rounded-lg gap-24">
        <div className="pt-8 flex flex-col justify-center gap-4 text-center">
          <p className="text-3xl font-bold">{title}</p>
          <p>{description}</p>
          <p className="flex justify-center gap-4 text-sky-600">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </div>
        <div className="relative w-full h-full">
          <Image
            src={thumbnail}
            alt="thumbnail"
            className="drop-shadow-2xl border-4 border-b-0 border-white rounded-t-xl"
          />
          <Image
            src={icon}
            alt="icon"
            className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </Link>
  );
};
