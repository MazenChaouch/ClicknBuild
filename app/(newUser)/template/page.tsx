"use client";
import Image from "next/image";
import bg from "@/app/assets/template/bg.png";
import { CardTemplate } from "@/app/_componants/template/card-template";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { templates } from "@/types";
import { addUserTemplate, getTemplates } from "./action";
import { getFormByUserId } from "@/data/form";
import { currentUser } from "@/lib/currentUser";
import { LogoutButton } from "@/app/_componants/auth/logout-button";
import ButtonForm from "@/app/_componants/auth/buttonForm";
import { form } from "@prisma/client";
import Link from "next/link";

const Page = () => {
  const [isPending, startTransition] = useTransition();
  const [selector, setSelector] = useState<string | undefined>(undefined);
  const [templates, setTemplates] = useState<templates | null>(null);
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [form, setForm] = useState<form | null>(null);
  useEffect(() => {
    const authenticateUser = async () => {
      const session = await currentUser();
      if (session?.id) {
        const form = await getFormByUserId(session.id);
        if (form?.status !== null) {
          setForm(form);
          switch (form?.status) {
            case "completed":
              window.location.href = "/dashboard";
              return;
            case "forWho":
            case "type":
            case "name":
              window.location.href = "/form";
              return;
          }
        }
      } else {
        window.location.href = "/form";
      }
      setIsLoading(false); // Set loading to false after authentication check
    };

    const fetchData = async () => {
      try {
        const data = await getTemplates();
        if (data) {
          setTemplates(data);
        }
      } catch (error) {
        console.log("Error fetching templates:", error);
      }
    };

    const fetchUser = async () => {
      await authenticateUser();
      await fetchData();
    };

    fetchUser();
  }, []);
  const handleSelector = (id: string) => {
    setSelector(id);
  };
  const onSubmit = () => {
    setError("");
    startTransition(() => {
      addUserTemplate(selector!, form?.name!)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  };
  if (isLoading) {
    return null;
  }
  return (
    <div className="relative flex h-screen max-h-full w-full flex-col items-center justify-center gap-16">
      <Link href="/" target="_blank">
        <Image
          src={bg}
          alt="bg"
          className="absolute -z-10 h-full object-cover"
        />
      </Link>
      <p className="max-w-6xl text-center text-8xl font-bold text-[#09006A]">
        Choosing your website template
      </p>
      <Carousel className="h-fit w-[90%]">
        <CarouselContent>
          {templates?.map((template, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <CardTemplate
                template={template}
                setSelector={() => handleSelector(template.id)}
                selected={selector}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={"link"}
          className="text-black disabled:text-transparent"
        />
        <CarouselNext
          variant={"link"}
          className="text-black disabled:text-transparent"
        />
      </Carousel>
      <div className="flex flex-col items-center justify-center gap-4">
        <Button
          className="rounded-full bg-[#2D5BFF] px-24 py-8 text-2xl font-bold text-white hover:bg-[#2d5affda]"
          disabled={!selector || isPending}
          onClick={() => onSubmit()}
        >
          Create Your Site
        </Button>
        <LogoutButton>
          <ButtonForm
            props={{ type: "button" }}
            className="w-fit bg-red-400 text-white hover:bg-red-300 hover:text-white disabled:opacity-85"
          >
            Cancel
          </ButtonForm>
        </LogoutButton>
      </div>
    </div>
  );
};

export default Page;
