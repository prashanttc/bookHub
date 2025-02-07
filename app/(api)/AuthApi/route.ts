import { signUp } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";

export const signUpApi = async ({
  email,
  enrollmentNumber,
  name,
  password,
  department,
  year,
  phone,
}: UserProps) => {
  try {
    const { data: existingUser, error: checkError } = await supabase
      .from("User")
      .select("id")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      return { error: "Something went wrong while checking user existence." };
    }
    if (existingUser){
      return { error: "user already exists" };
    }

    const User = await signUp({
      email: email,
      password: password,
    });
    if (User.error) {
      return { error: User.error.message || "user already exists" };
    }

    const UserDetails = await supabase.from("User").insert([
      {
        authUserId: User.data.user?.id,
        name: name,
        email: email,
        phone: phone,
        enrollmentNumber: enrollmentNumber,
        department: department,
        year: year,
      },
    ]);
    if (UserDetails.error) {
      console.error("Error inserting user details:", UserDetails.error.message);
      return {
        error: UserDetails.error.message || "error inserting user details",
      };
    }
    return { success: true };
  } catch (error: any) {
    return { error: error.message || "An unexpected error occurred." };
  }
};
