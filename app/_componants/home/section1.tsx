import Image from "next/image";
import bg from "@/app/assets/home/section1-bg.png";
import cover from "@/app/assets/home/section1.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
export const Section1 = () => {
  return (
    <div className="relative flex max-h-full w-full ">
      <Image src={bg} alt="bg" className="absolute -z-10 object-cover h-full" />
      <div className=" container flex justify-between items-center w-full gap-6 py-44">
        <div className="h-full w-full flex flex-col justify-center gap-8">
          <p className="text-[#09006A] text-7xl font-bold">
            ClicknBuild Create a website in One Click
          </p>
          <p className="w-4/5">
            ClicknBuild is a cutting-edge website builder designed for
            simplicity and speed, allowing users to create fully functional,
            professional websites with just one click.
          </p>
          <div className="h-fit w-full relative flex">
            <Input
              placeholder="Search for a template"
              className="px-6 py-8 shadow focus-visible:outline-none focus-visible:ring-0 text-xl"
            />
            <Button className="absolute right-8 top-3.5 bg-[#166AEA] gap-2 hover:bg-[#166bead6]">
              <Search />
              Search
            </Button>
          </div>
        </div>
        <div className="h-full w-4/5 flex items-center">
          <Image src={cover} alt="cover" />
        </div>
      </div>
    </div>
  );
};
