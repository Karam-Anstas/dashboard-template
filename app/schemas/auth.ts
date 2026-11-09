import * as z from "zod";

export const logInSchema = z.object({
    email: z.string()
        .trim()
        .toLowerCase()
        .pipe(z.email({ error: "Invalid email address." })),
    password: z.string().min(8),
});
