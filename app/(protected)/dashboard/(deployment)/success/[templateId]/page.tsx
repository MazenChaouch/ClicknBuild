import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import bg from "@/app/assets/dashboard/deployment/bg.png";
import { currentUser } from "@/lib/currentUser";
import { getMyTemplate, getTemplateById } from "@/data/template";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/app/_componants/dashboard/confetti";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link1Icon } from "@radix-ui/react-icons";
const Page = async ({ params }: { params: { Id: string } }) => {
  const user = await currentUser();
  const myTemplate = await getMyTemplate(params.Id);
  const template = await getTemplateById(myTemplate?.templateId!);
  return (
    <div className="relative flex h-full min-h-screen w-full justify-between">
      <Confetti />
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
        <div className="absolute right-1/2 top-1/2 flex w-full -translate-y-1/2 translate-x-1/2 justify-center">
          <Card className="w-full max-w-5xl space-y-8 p-8 shadow">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Congratuations!
              </h1>
              <p className="text-xl text-gray-500">
                You just deployed a new project to clicknbuild
              </p>
            </div>
            <Card className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">
                Your Project Website Link
              </h2>
              <div className="flex space-x-2">
                <Input
                  value={myTemplate?.domain! + ".clicknbuildpro.com"}
                  readOnly
                />
                <Link href={template?.link!} target="_blank">
                  <Button variant={"ghost"}>
                    <Link1Icon />
                  </Button>
                </Link>
              </div>
            </Card>
            <div className="flex justify-center">
              <Link href={"/dashboard"}>
                <Button className="rounded-3xl bg-[#2D5BFF] bg-gradient-to-br from-[#868CFF] to-[#4318FF] p-8 text-2xl font-semibold text-white transition-all duration-1000 hover:bg-gradient-to-tl hover:from-[#868CFF] hover:to-[#4318FF]">
                  Continue to Dashboard
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
