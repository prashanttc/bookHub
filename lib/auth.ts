import {supabase} from "./supabaseClient";

type Props = {
  email: string;
  password: string;
};
export const signUp = async ({ email, password }: Props) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async ({ email, password }: Props) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};
