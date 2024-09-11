"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { types, TypeSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ButtonForm from "@/app/_componants/auth/buttonForm";
import { useState, useTransition } from "react";
import { LogoutButton } from "../auth/logout-button";
import { FormError } from "../auth/form-error";
import { updateFormAction } from "@/app/(newUser)/form/(actions)/type";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

const Type = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<Zod.infer<typeof TypeSchema>>({
    resolver: zodResolver(TypeSchema),
    defaultValues: {
      type: "",
    },
  });
  const onSubmit = async (data: Zod.infer<typeof TypeSchema>) => {
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
    <div className="flex size-full flex-col justify-center gap-8">
      <p className="text-5xl font-bold text-stone-700">
        What type of website are you looking to build?
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[450px] justify-between rounded-full border-2 border-[#252F9C] px-7 py-8 text-lg",
                        )}
                      >
                        {field.value
                          ? types.find((type) => type.value === field.value)
                              ?.label
                          : "Click to select a type"}
                        <CaretSortIcon className="ml-2 size-8 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search framework..."
                        className="h-12 text-base"
                      />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {types.map((type) => (
                            <CommandItem
                              value={type.label}
                              key={type.value}
                              onSelect={() => {
                                form.setValue("type", type.value);
                              }}
                              className="text-lg"
                            >
                              {type.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto size-6 shrink-0 opacity-0 transition-opacity",
                                  type.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <div className="flex gap-4">
            <LogoutButton>
              <ButtonForm
                props={{ type: "button" }}
                className="w-fit bg-red-400 text-white hover:bg-red-300 hover:text-white disabled:opacity-85"
              >
                Cancel
              </ButtonForm>
            </LogoutButton>
            <ButtonForm
              props={{ type: "submit" }}
              className="w-fit bg-[#2D5BFF] text-white hover:bg-[#2d5affe7] hover:text-white disabled:opacity-85"
            >
              {isPending ? "Submitting..." : "Continue"}
            </ButtonForm>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Type;
