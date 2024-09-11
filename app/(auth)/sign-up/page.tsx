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
  return (
    <main className="h-screen w-screen flex">
      <div className="sm:min-w-[40%] max-sm:w-full h-full flex flex-none flex-col">
        <div className="sm:pl-16 py-6 flex items-center gap-4 border-b border-stone-200 max-sm:justify-center">
          <Image src={logo} alt="logo" className="size-12" />
          <p className="font-extrabold text-2xl align-baseline inline-block text-blue-950">
            ClickPro
          </p>
        </div>
        <div className="flex flex-col px-16 justify-center flex-grow gap-3 overflow-y-auto">
          <p className="font-bold text-3xl text-blue-950">Sign Up</p>
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
                          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#A0A3BD] size-8"
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
                          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#A0A3BD] size-8"
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
                          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#A0A3BD] size-8"
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
            <p className="text-gray-500 px-10 text-lg">or</p>
            <Separator className="my-4 w-full" />
          </div>
          <SocialMedia />
          <p className="text-center">
            You already have an account?{" "}
            <Link href="/sign-in" className="text-blue-500 ">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full flex h-full max-sm:hidden sm:flex-grow">
        <div className="w-full h-full relative">
          <Image src={coverImage} alt="cover" layout="fill" objectFit="cover" />
        </div>
      </div>
    </main>
  );
};

export default Page;
