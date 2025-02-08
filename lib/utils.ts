import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AuthformSchema = (type: string) =>
  z.object({
    name:
      type === "signUp"
        ? z.string().min(2, { message: "Name is required" })
        : z.string().optional(),
    enrollmentNumber:
      type === "signUp"
        ? z.string().regex(/^0832[A-Z]{2}\d{1,8}$/, {
            message:
              "Enrollment number must start with 0832, followed by 2 capital letters, and up to 8 digits.",
          })
        : z.string().optional(),
    year:
      type === "signUp"
        ? z.string().min(8, { message: "year is required" })
        : z.string().optional(),
    department:
      type === "signUp"
        ? z.string().min(2, { message: "department is required" })
        : z.string().optional(),
    email: z.string().email({ message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be 8 characters long" }),
    phone:
      type === "signUp"
        ? z.string().regex(/^[6789]\d{9}$/, {
            message: "Phone number must be a valid 10-digit Indian number",
          })
        : z.string().optional(),
  });
