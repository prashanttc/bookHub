import { AuthformSchema } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
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
import { departments } from "@/constants";

const formSchema = AuthformSchema("sign-up");
type Props = {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  label: string;
  type: "input" | "select";
};

const FormInput = ({ control, name, placeholder, label, type }: Props) => {
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
            <FormControl>
              {type === "input" ? (
                <Input
                  className="p-5 bg-[#232839] border-none outline-none "
                  placeholder={placeholder}
                  {...field}
                />
              ) : (
                <Select>
                  <SelectTrigger className="min-w-[200px] border-none text-white bg-[#232839]">
                    <SelectValue placeholder={placeholder} className="text-[#D6E0FF66] placeholder:text-[#D6E0FF66] " />
                  </SelectTrigger>
                  <SelectContent className="bg-[#232839] text-white border-none hover:bg-red-400">
                    {departments.map((branch) => (
                      <SelectItem value={branch.value} key={branch.label} className="">
                        {branch.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
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
