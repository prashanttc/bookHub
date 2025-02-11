import { AuthformSchema, UserFormSchema } from "@/lib/utils";
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

interface Props {
  control: Control<any>;
  name: FieldPath<any>;
  placeholder: string;
  label: string;
  children?: React.ReactNode;
  type: "input" | "select";
  formType: "auth" | "user"; 
}

const FormInput = ({ control, name, label, type, placeholder, formType, children }: Props) => {
  const formSchema = formType === "auth" ? AuthformSchema("sign-up") : UserFormSchema();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col gap-4 mt-5">
            <FormLabel className="text-light-100 font-light text-md">
              {label}
            </FormLabel>
            <FormControl>
              {type === "input" ? (
                <Input
                  className="form-input-custom"
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
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  {children}
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
