"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { AuthformSchema, UserFormSchema } from "@/lib/utils";
import { SelectContent, SelectItem } from "../ui/select";
import { departments, year } from "@/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import ErrorPopUp from "../ErrorPopUp";
import { useUser } from "@/context/UserContext";
import GlobalLoader from "../GlobalLoader";
import { updateProfile } from "@/lib/helperFuntions/utils";

const UserProfileForm = () => {
  const { loading, user } = useUser();
  const router = useRouter();
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  if (loading) {
    return <GlobalLoader />;
  }

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const formSchema = UserFormSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      phone: user.phone,
      department: user.department,
      year: user.year,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsloading(true);
    setError("");
    const data = {
      id:user.id,
      name: values.name!,
      phone: values.phone!,
      department: values.department!,
      year: values.year!,
    };
    const response = await updateProfile(data);
    if (response.error) {
      setError(response.error);
      setIsloading(false);
    } else {
      setIsloading(false)
      router.back()
    }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="  ">
          <FormInput
            formType="user"
            type="input"
            control={form.control}
            name="name"
            placeholder="enter your fullname"
            label="full Name"
          />
          <div className="flex flex-col xl:flex-row xl:gap-10">
            <div className="flex-1">
              <FormInput
                formType="user"
                type="select"
                control={form.control}
                name="department"
                placeholder="select your department"
                label="Department"
              >
                <SelectContent className="bg-[#232839] text-white border-none">
                  {departments.map((branch) => (
                    <SelectItem
                      value={branch.value}
                      key={branch.label}
                      className=""
                    >
                      {branch.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </FormInput>
            </div>
            <FormInput
              formType="user"
              type="select"
              control={form.control}
              name="year"
              placeholder="select year"
              label="year"
            >
              <SelectContent className="bg-[#232839] text-white border-none ">
                {year.map((year) => (
                  <SelectItem value={year.value} key={year.value} className="">
                    {year.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </FormInput>
          </div>

          <FormInput
            formType="user"
            type="input"
            control={form.control}
            name="phone"
            placeholder="enter your phone number"
            label="phone Number"
          />

          <Button
            onMouseEnter={() => router.prefetch("/")}
            type="submit"
            className="mt-10 w-full p-5"
            disabled={isloading}
          >
            {!isloading ? "Submit" : <Loader className="animate-spin" />}
          </Button>
        </form>
      </Form>
      <ErrorPopUp errorMessage={error} open={open} setOpen={setOpen} />
    </>
  );
};

export default UserProfileForm;
