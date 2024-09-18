"use client";

import Image from "next/image";
import logo from "@/app/assets/logo-slogan.png";
import { Input } from "@/components/ui/input";
import searchIcon from "@/app/assets/dashboard/search.svg";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import path from "path";
import { LogoutButton } from "../auth/logout-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const sidebarItems: { name: string; icon: string }[] = [
  { name: "Dashboard", icon: "ic:round-home" },
  { name: "Pages", icon: "ic:round-file-copy" },
  { name: "Media", icon: "ic:baseline-perm-media" },
  { name: "Map", icon: "lets-icons:map-fill" },
  { name: "Api", icon: "eos-icons:api" },
  { name: "Plugin", icon: "zondicons:plugin" },
  { name: "Settings", icon: "ic:round-settings" },
];
export const Sidebar = () => {
  // get current path
  let pathname = usePathname();
  pathname = path.basename(pathname);
  return (
    <div className="flex h-screen w-96 flex-col items-center border-r bg-[#F9FBFF]">
      <Link href="/" target="_blank" className="my-4 w-3/5 py-2">
        <Image src={logo} alt="logo" />
      </Link>
      <div className="relative flex w-11/12 items-center">
        <Input
          type="text"
          placeholder="Search"
          className="rounded-full px-10 focus-visible:ring-0"
        />
        <Image src={searchIcon} alt="search" className="absolute left-4" />
      </div>
      <div className="mt-8 flex w-full flex-col items-center">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            name={item.name}
            icon={item.icon}
            seleted={item.name.toLowerCase() === pathname}
          />
        ))}
      </div>
      <div className="absolute bottom-4">
        <LogoutButton>
          <Button className="rounded-full bg-[#166AEA] px-12 text-white hover:bg-[#166bead6]">
            Sign Out
          </Button>
        </LogoutButton>
      </div>
    </div>
  );
};
const SidebarItem = ({
  name,
  icon,
  seleted,
}: {
  name: string;
  icon: string;
  seleted?: boolean;
}) => {
  return (
    <div
      className={`mt-4 flex h-16 w-full items-center px-6 ${seleted && "bg-[#E3E3FF]"} hover:cursor-pointer hover:bg-[#E3E3FF]`}
    >
      <Icon
        className={`size-10 ${seleted ? "text-[#6E62E5]" : "text-gray-400"}`}
        icon={icon}
      />
      <span
        className={`ml-4 text-xl font-semibold ${seleted ? "text-[#6E62E5]" : "text-gray-400"}`}
      >
        {name}
      </span>
    </div>
  );
};
