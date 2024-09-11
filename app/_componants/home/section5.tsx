import Image from "next/image";
import Link from "next/link";
import React from "react";
import cover from "@/app/assets/home/section5.png";
import bg from "@/app/assets/home/section5-bg.png";
import { Button } from "@/components/ui/button";
export const Section5 = () => {
  return (
    <div className="relative flex items-center max-h-full w-full py-24">
      <Image src={bg} alt="bg" className="absolute -z-10 max-h-full " />
      <div className="container flex min-h-full items-center gap-12">
        <div className="h-full w-full flex items-center">
          <Image src={cover} alt="cover" />
        </div>
        <div className="h-full w-4/5 flex flex-col justify-center gap-20">
          <p className="text-6xl font-bold">
            Unique theme and templates for every budget and every project
          </p>
          <div className="flex flex-col gap-4">
            <p className="w-4/5 font-medium text-lg">
              Creating your free website couldn&apos;t be easier. Attract new
              customers, access data analytics, automate your business from your
            </p>
            <p className="w-4/5 font-medium text-lg">
              Creating your free website couldn&apos;t be easier. Attract new
              customers, access data analytics, automate your business from your
            </p>
          </div>
          <Link href="/sign-in">
            <Button className="bg-[#2D5BFF] hover:bg-[#2d5affda] text-white rounded-full px-24 py-8 text-xl font-semibold">
              Create a website
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
