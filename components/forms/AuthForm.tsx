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
import { useEffect, useState } from "react";
import { signInApi, signUpApi } from "@/api/authApi/route";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import ErrorPopUp from "../ErrorPopUp";

type Props = {
  type: "signIn" | "signUp";
};

const AuthForm = ({ type }: Props) => {
  const router = useRouter();
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const formSchema = AuthformSchema(type);

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsloading(true);
    setError("");

    if (type === "signUp") {
      const signUpData = {
        email: values.email,
        name: values.name!,
        password: values.password,
        phone: values.phone!,
        department: values.department!,
        year: values.year!,
        enrollmentNumber: values.enrollmentNumber!,
      };

      const response = await signUpApi(signUpData);
      if (response.error) {
        setError(response.error);
      } else {
        router.push("/");
      }
    } else if (type === "signIn") {
      const response = await signInApi({
        email: values.email,
        password: values.password,
      });

      if (response.error) {
        setError(response.error);
      } else {
        router.push("/");
      }
    }

    setIsloading(false);
  };

  return (
    <>
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
              <div className="flex flex-col xl:flex-row xl:gap-10">
                <div className="flex-1">
                  <FormInput
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

          <Button
          onMouseEnter={()=>router.prefetch('/')}
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

export default AuthForm;
