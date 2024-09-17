import Image from "next/image";
import bg from "@/app/assets/dashboard/deployment/bg.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser } from "@/lib/currentUser";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { getFormByUserId } from "@/data/form";
import { ConfigForm } from "@/app/_componants/dashboard/config-form";
import { getMyTemplate } from "@/data/template";

const Page = async ({ params }: { params: { Id: string } }) => {
  const user = await currentUser();
  const myTemplate = await getMyTemplate(params.Id);
  const siteName = await getFormByUserId(user?.id!).then((form) => form?.name);
  console.log(siteName);
  return (
    <div className="relative flex h-full w-full justify-between">
      <div className="absolute h-[50vh] w-full bg-white shadow" />
      <Image src={bg} alt="bg" className="absolute -z-10 h-full object-cover" />
      <div className="z-10 flex h-full w-full flex-col p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={user?.image! || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>{user?.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-bold">{user?.name}</h1>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>
          <Link href={"/dashboard"}>
            <Button variant={"outline"} size={"sm"}>
              Annuler
            </Button>
          </Link>
        </div>
        <div className="mt-24">
          <div className="flex items-center justify-between px-8">
            <p className="text-7xl font-extrabold tracking-tighter text-stone-800">
              Let&apos;s build something new.
            </p>
            <Button className="rounded-3xl bg-[#2D5BFF] bg-gradient-to-br from-[#868CFF] to-[#4318FF] p-8 text-2xl font-semibold text-white transition-all duration-1000 hover:bg-gradient-to-tl hover:from-[#868CFF] hover:to-[#4318FF]">
              Upgrade to Pro
            </Button>
          </div>
          <p className="mt-4 px-8 text-stone-500">
            To deploy a new Project, follow the steps to configure your Project.
          </p>
          <div className="mt-8 flex justify-between px-12">
            <div className="flex h-fit w-96 flex-col rounded-lg bg-white shadow">
              <div className="flex items-center gap-2 rounded-xl border border-black bg-stone-100 px-12 py-8">
                <Icon icon="gis:network" className="text-4xl" />
                <p className="text-xl font-medium">{myTemplate?.name}</p>
              </div>
              <div className="relative flex flex-col gap-16 px-12 py-12">
                <div className="absolute left-12 h-20 w-1 translate-x-2.5 translate-y-4 bg-stone-300" />
                <div>
                  <p className="flex items-center gap-4 text-xl font-medium">
                    <div className="z-10 size-6 rounded-full bg-[#4F46E5]" />
                    Configuration Project
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-4 text-xl font-medium text-stone-300">
                    <div className="size-6 rounded-full bg-stone-300" />
                    Deploy
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-fit w-1/2 rounded-xl border border-stone-200 bg-white p-8 shadow">
              <ConfigForm
                myTemplate={myTemplate!}
                userId={user?.id!}
                templateId={myTemplate?.templateId!}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
