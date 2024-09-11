import Image from "next/image";
import cover from "@/app/assets/home/section4.png";
import Link from "next/link";
export const Section4 = () => {
  return (
    <div className="flex max-h-full w-full py-24">
      <div className="container flex max-h-full w-full gap-12">
        <div className="h-full w-full flex items-center">
          <Image src={cover} alt="cover" />
        </div>
        <div className="h-full w-4/5 flex flex-col justify-center gap-16">
          <p className="text-7xl font-bold">About ClicknBuild</p>
          <p className="w-4/5 font-medium text-lg">
            ClicknBuild is a cutting-edge website builder designed for
            simplicity and speed, allowing users to create fully functional,
            professional websites with just one click. Whether you&apos;re a
            beginner or an experienced web developer, ClicknBuild streamlines
            the website creation process, offering a range of customizable
            templates, intuitive drag-and-drop tools, and seamless integration
            with various online services. No coding skills are required, making
            it easier than ever to establish your online presence in minutes.
            ClicknBuild is your one-stop solution for effortless website
            creation.
          </p>
          <Link href="">
            <p className="underline text-3xl font-medium">
              How to Create a Website
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
