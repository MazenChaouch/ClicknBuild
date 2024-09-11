import { Navbar } from "@/app/_componants/dashboard/navbar";
import { Sidebar } from "@/app/_componants/dashboard/sidebar";
import { getFormStatusById } from "@/data/form";
import { currentUser } from "@/lib/currentUser";
import Image from "next/image";
import { redirect } from "next/navigation";
import template from "@/app/assets/dashboard/template-selected.png";
const Page = async () => {
  const user = await currentUser();
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
            <Navbar />
            <div className="h-full overflow-y-auto">
              <Image src={template} alt="template" className="" />
            </div>
          </div>
        </div>
      );
  }
};

export default Page;
