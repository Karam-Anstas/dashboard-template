import * as z from "zod";

export const formSchema = z.object({
    username: z
        .string()
        .min(5, "The username must be at least 5 characters.")
        .max(32, "The username must be at most 32 characters."),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .pipe(z.email({ error: "Invalid email address." })),
    phoneNumber: z
        .string()
        .min(10, "The phone number must be at least 10 characters.")
        .max(15, "The phone number must be at most 15 characters."),
});
