import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
