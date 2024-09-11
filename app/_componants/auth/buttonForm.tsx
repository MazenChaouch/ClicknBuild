import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

const ButtonForm = ({
  props,
  children,
  className,
}: {
  props: ButtonHTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      {...props}
      className={cn(
        "flex w-full px-8 py-7 rounded-full bg-[#4A3AFF] hover:bg-[#4A3AFF]/90 shadow-xl text-white text-xl",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonForm;
