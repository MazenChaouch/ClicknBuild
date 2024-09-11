import Image from "next/image";
import React from "react";
import bg from "@/app/assets/home/section7-bg.png";
import users from "@/app/assets/home/section7/users.png";
import projects from "@/app/assets/home/section7/projects.png";
import npms from "@/app/assets/home/section7/npms.png";

export const Section7 = () => {
  return (
    <div className="relative flex h-full w-full justify-center items-center">
      <Image src={bg} alt="bg" className="absolute -z-10 h-full" />
      <div className="w-full h-fit flex justify-around items-center container">
        <div className="flex flex-col justify-between items-center gap-10 py-28">
          <Image src={users} alt="users" />
          <p className="text-3xl text-stone-600">Registered Users</p>
          <p className="text-xl font-extrabold">2,568,421</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-10 py-28">
          <Image src={projects} alt="projects" />
          <p className="text-3xl text-stone-600">Created Projects</p>
          <p className="text-xl font-extrabold">8,600,000+</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-10 py-28">
          <Image src={npms} alt="npms" />
          <p className="text-3xl text-stone-600">Monthly NPM Installs</p>
          <p className="text-xl font-extrabold">280,000+</p>
        </div>
      </div>
    </div>
  );
};
