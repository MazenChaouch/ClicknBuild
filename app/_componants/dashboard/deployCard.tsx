"use client";
import { deployAction } from "@/app/(protected)/dashboard/(deployment)/deploy/[Id]/action";
import { Button } from "@/components/ui/button";
import { UserTemplate } from "@prisma/client";
import { CaretRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export const DeployCard = ({ myTemplate }: { myTemplate: UserTemplate }) => {
  const [build, setBuild] = useState("nothing");
  const [deploy, setDeploy] = useState("nothing");
  const [domain, setDomain] = useState("nothing");
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const fakeLoader = async () => {
      if (cancelled) return;

      setBuild("loading");
      await delay(5000);
      if (cancelled) return;

      setBuild("success");
      setDeploy("loading");
      await delay(5000);
      if (cancelled) return;

      setDeploy("success");
      setDomain("loading");
      await delay(6000);
      if (cancelled) return;

      setDomain("success");
      await delay(2000);
      deployAction(myTemplate.id);
      window.location.href = "/dashboard/success/" + myTemplate.id;
    };

    fakeLoader();

    return () => {};
  }, [cancelled, myTemplate.id]);

  const handleCancel = () => {
    if (build === "loading") setBuild("error");
    if (deploy === "loading") setDeploy("error");
    if (domain === "loading") setDomain("error");

    setCancelled(true);
  };
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <p className="text-3xl font-semibold">Configure Project</p>
      <div className="h-0.5 w-full bg-stone-300 px-2" />
      <p className="text-xl text-stone-400">Finishing deployment...</p>
      <div className="h-full w-full">
        <div className="flex w-full items-center justify-between rounded-lg border p-8">
          <div className="flex items-center">
            <CaretRightIcon className="size-8 text-stone-500" />
            <p className="text-xl font-semibold text-stone-700">
              Build Process
            </p>
          </div>
          <Loader state={build} />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border p-8">
          <div className="flex items-center">
            <CaretRightIcon className="size-8 text-stone-500" />
            <p className="text-xl font-semibold text-stone-700">
              Deploy Sammary
            </p>
          </div>
          <Loader state={deploy} />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border p-8">
          <div className="flex items-center">
            <CaretRightIcon className="size-8 text-stone-500" />
            <p className="text-xl font-semibold text-stone-700">
              Assigning Custom Domains
            </p>
          </div>
          <Loader state={domain} />
        </div>
      </div>
      <Button
        className="w-fit self-end bg-[#4F46E5] p-6 text-xl hover:bg-[#4e46e5e0]"
        onClick={handleCancel}
      >
        Cancel Deployment
      </Button>
    </div>
  );
};

const Loader = ({ state }: { state: string }) => {
  switch (state) {
    case "loading":
      return (
        <MoonLoader size={20} color={"#4F46E5"} loading speedMultiplier={1} />
      );
    case "success":
      return <div className="z-10 size-6 rounded-full bg-[#4F46E5]" />;
    case "error":
      return <div className="z-10 size-6 rounded-full bg-[#EF4444]" />;
    case "nothing":
    default:
      return <div className="z-10 size-6 rounded-full bg-stone-500" />;
  }
};
