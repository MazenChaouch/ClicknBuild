import Image, { StaticImageData } from "next/image";
import cover from "@/app/assets/templates/cover.png";
import bg from "@/app/assets/templates/bg.png";
import { Navbar } from "../_componants/navbar";
import business from "@/app/assets/templates/types/business.svg";
import blog from "@/app/assets/templates/types/blog.svg";
import portfolio from "@/app/assets/templates/types/portfolio.svg";
import agency from "@/app/assets/templates/types/agency.svg";
import ai from "@/app/assets/templates/types/ai.svg";
import landing from "@/app/assets/templates/types/landing.svg";
import sass from "@/app/assets/templates/types/sass.svg";
import startup from "@/app/assets/templates/types/startup.svg";
import personal from "@/app/assets/templates/types/personal.svg";
import { ArrowRightIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { ListTemplates } from "../_componants/templates/list-templates";
const types: { name: string; icon: StaticImageData }[] = [
  { name: "Business", icon: business },
  { name: "Portfolio", icon: portfolio },
  { name: "Personal", icon: personal },
  { name: "Agency", icon: agency },
  { name: "Landing Page", icon: landing },
  { name: "Startup", icon: startup },
  { name: "Sass", icon: sass },
  { name: "Blog", icon: blog },
  { name: "Artificial Intelligence", icon: ai },
];

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Navbar />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-8 py-16">
        <Image src={cover} alt="cover" className="absolute -z-10 h-full" />
        <p className="max-w-5xl text-center text-7xl text-white">
          Choose the best responsive website templates
        </p>
        <p className="text-xl font-light text-white/70">
          Build stunning sites with clickPro templates.
        </p>
        <div className="flex max-w-xl flex-wrap items-center justify-center gap-2">
          {types.map((type, index) => (
            <div
              key={index}
              className="flex gap-1 rounded-lg bg-white/10 px-2 py-1"
            >
              <Image src={type.icon} alt={type.name} />
              <p className="text-sm font-semibold text-white/80">{type.name}</p>
            </div>
          ))}
          <div className="flex items-center gap-1 rounded-lg bg-white px-2 py-1">
            <ArrowRightIcon className="size-4 text-violet-600" />
            <p className="text-sm font-semibold text-violet-600">
              All Categories
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-8 py-16">
        <Image
          src={bg}
          alt="bg"
          className="absolute -z-10 h-full object-cover"
        />
        <div className="container flex h-full w-full flex-col gap-36">
          <div className="flex h-full w-full flex-col gap-6 rounded-3xl border bg-white p-20 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-xl text-stone-400">
                The latest templates from the ClickPro community.
              </p>
              <p className="flex items-center font-semibold text-sky-500">
                See all new templates
                <CaretRightIcon className="size-5" />
              </p>
            </div>
            <ListTemplates types={[]} count={5} />
          </div>
          <div className="flex h-full w-full flex-col gap-6 rounded-3xl border bg-white p-20 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-xl text-stone-400">
                The latest templates from the ClickPro community.
              </p>
              <p className="flex items-center font-semibold text-sky-500">
                See all new templates
                <CaretRightIcon className="size-5" />
              </p>
            </div>
            <ListTemplates types={[]} count={10} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
