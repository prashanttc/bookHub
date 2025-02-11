"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const token = hashParams.get("access_token");

    if (token) {
      setAccessToken(token);
    } else {
      setMessage("Invalid or expired reset link.");
    }
  }, []);

  const handlePasswordReset = async () => {
    if (!password) {
      setMessage("Password cannot be empty.");
      return;
    }

    // if (!accessToken) {
    //   setMessage("Invalid or expired token.");
    //   return;
    // }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password updated! Redirecting...");
      setTimeout(() => router.push("/signIn"), 3000);
    }

    setLoading(false);
  };

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <div className="bg-dark-100 w-[300px] md:w-[500px] px-10 py-10  rounded-2xl  flex flex-col items-center ">
        <h2 className="text-white text-xl mb-5">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          className="form-input-custom rounded-2xl"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="mt-5"
          onClick={handlePasswordReset}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Password"}
        </Button>
        <p className="text-red mt-5">{message}</p>
      </div>
    </div>
  );
}
