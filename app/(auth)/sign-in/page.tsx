"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAction } from "../sign-in/action";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/schema";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import bg from "@/app/assets/sign-in/bg.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SocialMedia from "@/app/_componants/auth/socialMedia";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import InputSign from "@/app/_componants/auth/inputSign";
import account from "@/app/assets/sign-in/account.svg";
import lock from "@/app/assets/sign-in/lock.svg";
import { FormError } from "@/app/_componants/auth/form-error";
import { FormSuccess } from "@/app/_componants/auth/form-success";
import { useSearchParams } from "next/navigation";
import { SyncLoader } from "react-spinners";
import ButtonForm from "@/app/_componants/auth/buttonForm";
import { signIn } from "next-auth/react";
const Page = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [twofactor, setTwoFactor] = useState<boolean | undefined>(false);
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "You already have an account with this email. Please login and link your account."
      : "";

  const form = useForm<Zod.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onclick = (provider: "google" | "facebook") => {
    startTransition(() => {
      signIn(provider);
      console.log(provider, "clicked");
    });
  };
  const onSubmit = (data: Zod.infer<typeof signInSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      signInAction(data)
        .then((data) => {
          if (data?.error) {
            setError(data?.error);
          }
          if (data?.success) {
            setSuccess(data?.success);
          }
          if (data?.twofactor) {
            setTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong, please try again."));
    });
  };
  return (
    <main className="flex h-full w-full flex-col items-center justify-evenly space-y-8 py-4">
      <Image
        src={bg}
        alt="bg"
        className="absolute -z-10 h-full object-fill object-center"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-3xl font-bold">ClickPro</p>
        <Link href="/">
          <Image src={logo} alt="logo" className="size-20" />
        </Link>

        <p className="text-3xl font-bold">Sign in to your account</p>
      </div>
      <Card className="w-[500px] rounded-[34px] border-0 shadow-xl">
        <CardHeader />
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {twofactor && (
                <>
                  <FormField
                    control={form.control}
                    name="twofactor"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputSign
                            fields={{ ...field }}
                            props={{
                              placeholder: "000 000",
                              disabled: isPending,
                            }}
                          ></InputSign>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </>
              )}
              {!twofactor && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputSign
                            fields={{ ...field }}
                            props={{
                              placeholder: "Email",
                              disabled: isPending,
                            }}
                          >
                            <Image
                              src={account}
                              alt="logo"
                              className="absolute right-8 top-1/2 -translate-y-1/2 transform"
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
                            <Image
                              src={lock}
                              alt="logo"
                              className="absolute right-8 top-1/2 -translate-y-1/2 transform"
                            />
                          </InputSign>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormError message={error || urlError} />
              <FormSuccess message={success} />
              <ButtonForm
                props={{ type: "submit", disabled: isPending }}
                className="disabled:opacity-85"
              >
                {isPending ? (
                  <SyncLoader
                    color="#fff"
                    className="mx-auto"
                    size={8}
                    margin={15}
                    speedMultiplier={0.75}
                  />
                ) : twofactor ? (
                  "Verify"
                ) : (
                  "Sign In"
                )}
              </ButtonForm>
            </form>
          </Form>
          <div className="flex w-full items-center justify-center overflow-hidden py-8">
            <Separator className="my-4 w-full" />
            <p className="px-10 text-lg text-gray-500">or</p>
            <Separator className="my-4 w-full" />
          </div>
          <SocialMedia onclick={onclick} />
          <p className="py-4 text-center">
            You don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-blue-500"
              aria-disabled={isPending}
            >
              Sign up
            </Link>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </main>
  );
};

export default Page;
