"use client";
import coverImage from "../../assets/sign-up/cover.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "@/app/assets/logo.png";
import { signUpSchema } from "@/schema";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import InputSign from "@/app/_componants/auth/inputSign";
import ButtonForm from "@/app/_componants/auth/buttonForm";
import { Separator } from "@/components/ui/separator";
import SocialMedia from "@/app/_componants/auth/socialMedia";
import Link from "next/link";
import { useState, useTransition } from "react";
import { signUpAction } from "../sign-up/action";
import { FormSuccess } from "@/app/_componants/auth/form-success";
import { FormError } from "@/app/_componants/auth/form-error";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signIn } from "next-auth/react";

const Page = () => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = useForm<Zod.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: Zod.infer<typeof signUpSchema>) => {
    startTransition(() => {
      setError("");
      setSuccess("");
      signUpAction(data)
        .then((data) => {
          if (data?.error) {
            setError(data?.error);
          }
          if (data?.success) {
            setSuccess(data?.success);
          }
        })
        .catch(() => setError("Something went wrong, please try again."));
    });
  };
  const onclick = (provider: "google" | "facebook") => {
    startTransition(() => {
      signIn(provider);
      console.log(provider, "clicked");
    });
  };
  return (
    <main className="flex h-screen w-screen">
      <div className="flex h-full flex-none flex-col max-sm:w-full sm:min-w-[40%]">
        <div className="flex items-center gap-4 border-b border-stone-200 py-6 max-sm:justify-center sm:pl-16">
          <Image src={logo} alt="logo" className="size-12" />
          <p className="inline-block align-baseline text-2xl font-extrabold text-blue-950">
            ClickPro
          </p>
        </div>
        <div className="flex flex-grow flex-col justify-center gap-3 overflow-y-auto px-16">
          <p className="text-3xl font-bold text-blue-950">Sign Up</p>
          <p className="text-gray-500">This form is secured and encrypted!</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputSign
                        fields={{ ...field }}
                        props={{
                          placeholder: "Full Name",
                          disabled: isPending,
                        }}
                      >
                        <Icon
                          icon="mdi-light:account"
                          className="absolute right-6 top-1/2 size-8 -translate-y-1/2 transform text-[#A0A3BD]"
                        />
                      </InputSign>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputSign
                        fields={{ ...field }}
                        props={{ placeholder: "Email", disabled: isPending }}
                      >
                        <Icon
                          icon="mdi-light:email"
                          className="absolute right-6 top-1/2 size-8 -translate-y-1/2 transform text-[#A0A3BD]"
                        />
                      </InputSign>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputSign
                        fields={{ ...field }}
                        props={{
                          placeholder: "Password",
                          type: "password",
                          disabled: isPending,
                        }}
                      >
                        <Icon
                          icon="mdi-light:lock"
                          className="absolute right-6 top-1/2 size-8 -translate-y-1/2 transform text-[#A0A3BD]"
                        />
                      </InputSign>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
              <FormSuccess message={success} />
              <ButtonForm props={{ type: "submit", disabled: isPending }}>
                Sign Up
              </ButtonForm>
            </form>
          </Form>
          <div className="flex w-full items-center justify-center overflow-hidden">
            <Separator className="my-4 w-full" />
            <p className="px-10 text-lg text-gray-500">or</p>
            <Separator className="my-4 w-full" />
          </div>
          <SocialMedia onclick={onclick} />
          <p className="text-center">
            You already have an account?
            <Link href="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="flex h-full w-full max-sm:hidden sm:flex-grow">
        <div className="relative h-full w-full">
          <Image src={coverImage} alt="cover" layout="fill" objectFit="cover" />
        </div>
      </div>
    </main>
  );
};

export default Page;
