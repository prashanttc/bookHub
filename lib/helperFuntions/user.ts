import { toast } from "sonner";

export const signUp = async (data: any) => {
  const response = await fetch("/api/User/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const signIn = async (data: any) => {
  const response = await fetch("/api/User/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateProfile = async (data: any) => {
  const response = await fetch("/api/User/ProfileUpdate", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getUser = async () => {
  try {
    const response = await fetch("/api/User/userDetail", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return { error: "Failed to load user data" };
  }
};

export const getborrowedBook = async () => {
  try {
    const response = await fetch("/api/User/userBorrowedBooks", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      const errorData = await response.json();
      toast.error('failed to fetch books');
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return toast.error("unexpected error occured");
  }
};
