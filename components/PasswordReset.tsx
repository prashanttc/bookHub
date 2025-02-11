"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabaseClient";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!email) {
      setMessage("Please enter an email.");
      return;
    }
    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setMessage("Invalid email format.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error ,data } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/resetPassword`,
    });;
    console.log("dara",data)
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for reset instructions.");
    }

    setLoading(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-white underline text-start">
        Forgot password?
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#12141D] border-none text-white">
        <AlertDialogHeader className="flex items-center">
          <AlertDialogTitle className="text-2xl mb-4">Enter your email</AlertDialogTitle>
        </AlertDialogHeader>
        <Input
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input-custom "
          />
        <p className="text-red-500 text-sm mt-1">{message}</p>
        <AlertDialogFooter>
        <AlertDialogCancel className="text-black">cancel</AlertDialogCancel>
          <Button onClick={handlePasswordReset} disabled={loading}>
            {loading ? "Sending..." : "Continue"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PasswordReset;
