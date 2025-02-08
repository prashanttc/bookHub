import { AuthformSchema } from "@/lib/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

const formSchema = AuthformSchema("sign-up");

interface Props {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  label: string;
  children?: React.ReactNode;
  type: "input" | "select";
}

const FormInput = (props: Props) => {
  const { control, name, label, type, placeholder } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <div className="flex flex-col gap-4 mt-5">
            <FormLabel className="text-light-100 font-light text-md">
              {label}
            </FormLabel>
            <FormControl className="">
              {type === "input" ? (
                <Input
                  className="p-5 h-11  bg-[#232839] border-none text-white outline-none w-[100%] "
                  placeholder={placeholder}
                  {...field}
                />
              ) : (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="min-w-[200px] p-5 border-none text-white bg-[#232839] md:max-w-[100%]">
                    <SelectValue
                      placeholder={placeholder}
                      className="text-[#D6E0FF66] placeholder:text-[#D6E0FF66]  "
                    />
                  </SelectTrigger>
                  {props.children}
                </Select>
              )}
            </FormControl>
          </div>
          <FormMessage className="shad-from-message" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
