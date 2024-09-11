import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";
import { ControllerRenderProps } from "react-hook-form";

const InputSign = ({
  fields,
  props,
  children,
}: {
  fields: ControllerRenderProps;
  props?: InputHTMLAttributes<HTMLInputElement>;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative flex">
      <Input
        {...fields}
        {...props}
        className="px-8 py-7 rounded-full placeholder:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 text-lg"
      />
      {children}
    </div>
  );
};

export default InputSign;
