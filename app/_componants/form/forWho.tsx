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
import { forWhoSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ButtonForm from "@/app/_componants/auth/buttonForm";
import { useState, useTransition } from "react";
import { LogoutButton } from "../auth/logout-button";
import { FormError } from "../auth/form-error";
import { useRouter } from "next/navigation";
import { updateFormAction } from "@/app/(newUser)/form/(actions)/forWho";

const ForWho = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<Zod.infer<typeof forWhoSchema>>({
    resolver: zodResolver(forWhoSchema),
    defaultValues: {
      forWho: undefined,
    },
  });
  const onSubmit = async (data: Zod.infer<typeof forWhoSchema>) => {
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
      <p className="text-xl">Ready to Start</p>
      <p className="font-bold text-5xl text-stone-700">
        For who you are creating this website?
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="forWho"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="py-4 gap-4"
                  >
                    <div className="flex items-center space-x-4 px-6 py-3 border border-[#2D5BFF] rounded-md">
                      <RadioGroupItem value="myself" id="r1" />
                      <Label htmlFor="r1" className="text-lg select-none">
                        For myself, as a business owner
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 px-6 py-3 border border-[#2D5BFF] rounded-md">
                      <RadioGroupItem value="client" id="r2" />
                      <Label htmlFor="r2" className="text-lg select-none">
                        For a client, as a freelancer or agency
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <div className="flex justify-end gap-4">
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

export default ForWho;
