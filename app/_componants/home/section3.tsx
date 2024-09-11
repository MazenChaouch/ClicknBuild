import Image from "next/image";
import React from "react";
import bg from "@/app/assets/home/section2-bg.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export const Section3 = () => {
  return (
    <div className="relative flex flex-col justify-center items-center max-w-full gap-12 py-36">
      <Image src={bg} alt="bg" className="absolute -z-10  max-h-full" />
      <div className="container flex flex-col justify-center items-center gap-4">
        <p className="text-3xl font-bold text-blue-950">
          Imagine a vast collection of business apps at your disposal.
        </p>
        <p className="text-2xl font-medium text-blue-950">
          Got something to improve? There’s an app for that.
        </p>
        <p className="text-2xl font-medium text-blue-950">
          No complexity, no fees, just one-click installation.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl font-medium text-blue-950">
          Each application simplifies a process and increases user capabilities.
          Imagine the
        </p>
        <p className="text-2xl font-medium text-blue-950">
          impact when a person disposes of the outlet for his travel, with a
          perfect
        </p>
        <p className="text-2xl font-medium text-blue-950">integration.</p>
      </div>
      <Link href="/sign-in">
        <Button className="bg-[#2D5BFF] hover:bg-[#2d5affda] text-white rounded-full px-24 py-8 text-2xl font-bold">
          Create Your Site
        </Button>
      </Link>
    </div>
  );
};
