import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { getAllTemplate } from "@/data/template";

export const Section8 = async () => {
  const templates = await getAllTemplate();
  console.log(templates);
  return (
    <div className="flex max-h-full flex-col items-center justify-center gap-12 bg-[linear-gradient(114.84deg,_#2F40AD_29.42%,_#394FB7_40.66%,_#2A3BA9_54.32%,_#394FB7_66.76%,_#354AB5_100%)] py-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-6xl text-white">Website templates</p>
        <p className="text-6xl text-white">designed to make you stand out</p>
        <div className="gap-4 text-center">
          <p className="text-lg text-white">
            Save time and choose one of our 900 free, customizable templates and
          </p>
          <p className="text-white">
            strategically developed for each area of ​​activity. You can also
            choose
          </p>
          <p className="text-white">
            to use a blank canvas for creating a professional website.
          </p>
        </div>
      </div>
      <Link href="/sign-in">
        <Button className="rounded-full bg-white px-24 py-8 text-2xl font-semibold text-[#252F9C] hover:bg-[#252F9C] hover:text-white">
          See the templates
        </Button>
      </Link>
      <Carousel className="h-fit w-[90%]">
        <CarouselContent>
          {templates!.map((template, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Link href={template.link} target="_blank">
                <div className="flex h-full flex-col justify-between p-1">
                  <Image
                    src={template.image}
                    alt={template.name}
                    className="h-full object-cover"
                    width={500}
                    height={200}
                  />
                  <p className="text-base font-semibold uppercase text-white">
                    {template.name}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={"link"}
          className="text-white disabled:text-transparent"
        />
        <CarouselNext
          variant={"link"}
          className="text-white disabled:text-transparent"
        />
      </Carousel>
    </div>
  );
};
