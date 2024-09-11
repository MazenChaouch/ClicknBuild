"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NameSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ButtonForm from "@/app/_componants/auth/buttonForm";
import { useState, useTransition } from "react";
import { LogoutButton } from "../auth/logout-button";
import { FormError } from "../auth/form-error";
import { useRouter } from "next/navigation";
import { updateFormAction } from "@/app/(newUser)/form/(actions)/name";
import { Input } from "@/components/ui/input";

const Name = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<Zod.infer<typeof NameSchema>>({
    resolver: zodResolver(NameSchema),
    defaultValues: {
      name: undefined,
    },
  });
  const onSubmit = async (data: Zod.infer<typeof NameSchema>) => {
    setError("");
    startTransition(() => {
      updateFormAction(data)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  };
  return (
    <div className="size-full flex flex-col justify-center gap-4">
      <p className="text-xl">Let&apos;s start the setup</p>
      <p className="font-bold text-5xl text-stone-700">
        What name would you like to give to your site?
      </p>
      <p>
        This information will be used to personalize your online experience.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="px-8 py-7 focus-visible:outline-[#252F9C] text-lg"
                    placeholder="Enter your site name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <div className="flex gap-4">
            <LogoutButton>
              <ButtonForm
                props={{ type: "button" }}
                className="disabled:opacity-85 w-fit bg-red-400 text-white hover:bg-red-300 hover:text-white"
              >
                Cancel
              </ButtonForm>
            </LogoutButton>
            <ButtonForm
              props={{ type: "submit" }}
              className="disabled:opacity-85 w-fit bg-[#2D5BFF] text-white hover:bg-[#2d5affe7] hover:text-white"
            >
              {isPending ? "Submitting..." : "Continue"}
            </ButtonForm>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Name;
