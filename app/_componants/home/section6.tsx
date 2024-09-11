import blog from "@/app/assets/home/section6/thumbnail/blog.png";
import ecommerce from "@/app/assets/home/section6/thumbnail/ecommerce.png";
import cms from "@/app/assets/home/section6/thumbnail/cms.png";
import site from "@/app/assets/home/section6/thumbnail/site.png";
import marketing from "@/app/assets/home/section6/thumbnail/marketing.png";
import wp from "@/app/assets/home/section6/thumbnail/wp.png";
import iconblog from "@/app/assets/home/section6/icon-blog.svg";
import iconecommerce from "@/app/assets/home/section6/icon-ecommerce.svg";
import iconcms from "@/app/assets/home/section6/icon-cms.svg";
import iconsite from "@/app/assets/home/section6/icon-site.svg";
import iconmarketing from "@/app/assets/home/section6/icon-marketing.svg";
import iconwp from "@/app/assets/home/section6/icon-wp.svg";
import { StaticImageData } from "next/image";
import { CategorieCard } from "./categorie-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Categories: {
  title: string;
  description: string;
  tags: string[];
  thumbnail: StaticImageData;
  icon: string;
}[] = [
  {
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["blog", "content", "writing"],
    thumbnail: blog,
    icon: iconblog,
  },
  {
    title: "E-commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["e-commerce", "shop", "sell"],
    thumbnail: ecommerce,
    icon: iconecommerce,
  },
  {
    title: "CMS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["cms", "content", "management"],
    thumbnail: cms,
    icon: iconcms,
  },
  {
    title: "Site",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["site", "web", "design"],
    thumbnail: site,
    icon: iconsite,
  },
  {
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["marketing", "ads", "campaign"],
    thumbnail: marketing,
    icon: iconmarketing,
  },
  {
    title: "Web Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["web", "service", "api"],
    thumbnail: wp,
    icon: iconwp,
  },
];
export const Section6 = () => {
  return (
    <div className="w-full h-full flex flex-col gap-24 bg-[#C19BF8] justify-center items-center p-48">
      <div className="grid grid-cols-3 gap-6">
        {Categories.map((categorie, index) => (
          <CategorieCard
            key={index}
            title={categorie.title}
            description={categorie.description}
            tags={categorie.tags}
            thumbnail={categorie.thumbnail}
            icon={categorie.icon}
          />
        ))}
      </div>
      <Link href="/sign-in">
        <Button className="bg-[#2D5BFF] hover:bg-[#2d5affda] text-white rounded-full px-24 py-8 text-xl font-semibold">
          Create a website
        </Button>
      </Link>
    </div>
  );
};
