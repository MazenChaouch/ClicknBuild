import ForWho from "@/app/_componants/form/forWho";
import Name from "@/app/_componants/form/name";
import Type from "@/app/_componants/form/type";
import { getFormStatusById } from "@/data/form";
import { currentUser } from "@/lib/currentUser";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  const formStatus = await getFormStatusById(user?.id!);
  console.log(formStatus);
  switch (formStatus) {
    case "completed":
      redirect("/dashboard");
    case "forWho":
      return <ForWho />;
    case "type":
      return <Type />;
    case "name":
      return <Name />;
    case "template":
      redirect("/template");
  }
};

export default page;
