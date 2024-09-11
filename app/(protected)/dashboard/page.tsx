import ButtonForm from "@/app/_componants/auth/buttonForm";
import { LogoutButton } from "@/app/_componants/auth/logout-button";
import { Sidebar } from "@/app/_componants/dashboard/sidebar";
import { getFormStatusById } from "@/data/form";
import { currentUser } from "@/lib/currentUser";
import { redirect } from "next/navigation";

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
        </div>
      );
  }
};

export default Page;
