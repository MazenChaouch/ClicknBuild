import { Navbar } from "@/app/_componants/dashboard/navbar";
import { Sidebar } from "@/app/_componants/dashboard/sidebar";
import { getFormStatusById } from "@/data/form";
import { getMyTemplateByUserId, getTemplateById } from "@/data/template";
import { currentUser } from "@/lib/currentUser";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();
  const MyTemplate = await getMyTemplateByUserId(user?.id!);
  const template = await getTemplateById(MyTemplate?.templateId!);
  const formStatus = await getFormStatusById(user?.id!);

  switch (formStatus) {
    case "template":
      redirect("/template");
    case "forWho":
    case "name":
    case "type":
      redirect("/form");
    default:
      return (
        <div className="flex h-screen w-full">
          <Sidebar />
          <div className="flex h-full w-full flex-col">
            <Navbar
              link={template?.link!}
              Id={MyTemplate?.id!}
              deployment={MyTemplate?.deployment!}
            />
            <div className="h-full overflow-y-auto">
              <Image
                src={template?.thumbnail!}
                alt="template"
                className="object-cover"
                width={1500}
                height={5000}
              />
            </div>
          </div>
        </div>
      );
  }
};

export default Page;
