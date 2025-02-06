"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { AuthformSchema } from "@/lib/utils";
import { SelectContent, SelectItem } from "../ui/select";
import { departments, year } from "@/constants";

const formSchema = AuthformSchema("sign-up");

type Props = {
  type: "signIn" | "signUp";
};

const AuthForm = ({ type }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      enrollmentNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        {type === "signUp" && (
          <FormInput
            type="input"
            control={form.control}
            name="name"
            placeholder="enter your fullname"
            label="full Name"
          />
        )}
        <FormInput
          type="input"
          control={form.control}
          name="email"
          placeholder="enter your email"
          label="email"
        />
        <FormInput
          type="input"
          control={form.control}
          name="password"
          placeholder="enter your password"
          label="Password"
        />
        {type === "signUp" && (
          <>
            <div className="flex flex-col md:flex-row md:gap-10">
              <div className="flex-1">
                <FormInput
                  type="select"
                  control={form.control}
                  name="department"
                  placeholder="select your department"
                  label="Department"
                >
                  <SelectContent className="bg-[#232839] text-white border-none ">
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
                type="select"
                control={form.control}
                name="year"
                placeholder="select year"
                label="year"
              >
                <SelectContent className="bg-[#232839] text-white border-none ">
                  {year.map((year) => (
                    <SelectItem
                      value={year.value}
                      key={year.value}
                      className=""
                    >
                      {year.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </FormInput>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10 ">
              <div className="flex-1">
                <FormInput
                  type="input"
                  control={form.control}
                  name="enrollmentNumber"
                  placeholder="enter your enrollment number"
                  label="enrollment Number"
                />
              </div>
              <FormInput
                type="input"
                control={form.control}
                name="phone"
                placeholder="enter your phone number"
                label="phone Number"
              />
            </div>
          </>
        )}

        <Button type="submit" className="mt-10 w-full p-5">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
