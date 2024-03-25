import { z } from "zod";

export const resetPasswordFormSchema = z.object({
    newPassword: z.string().min(8, { message: "Password length greater than 8 required" }),
    confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});
