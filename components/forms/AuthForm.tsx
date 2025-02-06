"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { AuthformSchema } from "@/lib/utils";
import { Input } from "../ui/input";

const formSchema = AuthformSchema("sign-up");

const AuthForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
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
        <FormInput
          type="input"
          control={form.control}
          name="name"
          placeholder="enter your fullname"
          label="full Name"
        />
        <FormInput
          type="input"
          control={form.control}
          name="email"
          placeholder="enter your email"
          label="email"
        />
        <div className="flex gap-10">
          <div className="flex-1">
            <FormInput
              type="select"
              control={form.control}
              name="department"
              placeholder="select your department"
              label="Department"
            />
          </div>
          <FormInput
              type="select"
              control={form.control}
              name="year"
              placeholder="select year"
              label="year"
            />
        </div>
        <div className="flex gap-10">
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AuthForm;
