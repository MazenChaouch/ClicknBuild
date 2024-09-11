import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Redo2, Undo2 } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-4 border-b bg-[#F9FBFF] py-4">
      <Button variant={"ghost"} className="">
        <Icon icon="lucide:mouse-pointer-2" className="size-4 text-stone-500" />
      </Button>
      <Button variant={"ghost"} className="">
        <Icon icon="ph:hand-bold" className="size-4 text-stone-500" />
      </Button>
      <div className="flex items-center text-stone-500">
        100%
        <CaretDownIcon />
      </div>
      <Button variant={"ghost"} className="">
        <Undo2 className="size-4 text-stone-500" />
      </Button>
      <Button variant={"ghost"} className="">
        <Redo2 className="size-4 text-stone-500" />
      </Button>
    </div>
  );
};
