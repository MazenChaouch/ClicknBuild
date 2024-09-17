import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Redo2, Undo2 } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  link: string;
  Id: string;
  deployment?: boolean;
}
export const Navbar = ({ link, Id, deployment }: NavbarProps) => {
  return (
    <div className="relative flex w-full items-center border-b bg-[#F9FBFF] py-8">
      <div className="absolute right-1/2 flex translate-x-1/2 items-center gap-4">
        <Button variant={"ghost"}>
          <Icon
            icon="lucide:mouse-pointer-2"
            className="size-4 text-stone-500"
          />
        </Button>
        <Button variant={"ghost"}>
          <Icon icon="ph:hand-bold" className="size-4 text-stone-500" />
        </Button>
        <div className="flex items-center text-stone-500">
          100%
          <CaretDownIcon />
        </div>
        <Button variant={"ghost"}>
          <Undo2 className="size-4 text-stone-500" />
        </Button>
        <Button variant={"ghost"}>
          <Redo2 className="size-4 text-stone-500" />
        </Button>
      </div>
      <div className="absolute right-4 flex items-center gap-2">
        <Link href={link} target="_blank">
          <Button variant={"outline"} className="flex h-9 gap-2 text-stone-500">
            <Icon icon="ph:eye" className="size-5 text-stone-500" />
            Preview
          </Button>
        </Link>
        <Link href={deployment ? link : `/dashboard/config/${Id}`}>
          <Button className="flex h-9 gap-2 bg-[#4F46E5]">
            <Icon icon="mdi:tick" className="size-5" />
            {deployment ? "Go to My Website" : "Save & Deploy"}
          </Button>
        </Link>
      </div>
    </div>
  );
};
