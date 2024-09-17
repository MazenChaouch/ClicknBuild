"use client";
import { configSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserTemplate } from "@prisma/client";
import { useTransition } from "react";
import { configAction } from "@/app/(protected)/dashboard/(deployment)/config/[templateId]/action";

interface ConfigFormProps {
  myTemplate: UserTemplate;
  userId: string;
  templateId: string;
}
export const ConfigForm = ({
  myTemplate,
  userId,
  templateId,
}: ConfigFormProps) => {
  const [isPending, startTrasition] = useTransition();
  const form = useForm<z.infer<typeof configSchema>>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      name: myTemplate.name,
      domain: myTemplate.domain!,
    },
  });
  const onSubmit = (values: z.infer<typeof configSchema>) => {
    startTrasition(() => {
      configAction(values, myTemplate.id)
        .then(() => {
          window.location.href = "/dashboard/deploy/" + myTemplate.id;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="flex h-full w-full flex-col gap-16">
      <p className="text-3xl font-semibold">Configure Project</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-stone-500">
                  Website Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Website Name"
                    {...field}
                    disabled={isPending}
                    className="p-8 text-xl placeholder:text-lg placeholder:text-stone-400"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-stone-500">
                  Custom domain name
                </FormLabel>
                <FormControl>
                  <div className="flex select-none focus-visible:ring-1">
                    <Input
                      maxLength={25}
                      placeholder="Website Name"
                      disabled={isPending}
                      {...field}
                      className="focus-visible:ring-none w-1/2 rounded-none rounded-s-md p-8 text-xl placeholder:text-lg placeholder:text-stone-400 focus-visible:ring-0"
                    />
                    <Input
                      className="focus-visible:ring-none w-1/2 cursor-default select-none rounded-none rounded-e-md border-s-0 p-8 text-xl placeholder:text-lg placeholder:text-stone-400 focus-visible:ring-0"
                      value=".clicknbuildpro.com"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full bg-[#4F46E5] py-7 text-xl font-bold hover:bg-[#4e46e5e0]"
            type="submit"
            disabled={isPending}
          >
            Deploy
          </Button>
        </form>
      </Form>
    </div>
  );
};
