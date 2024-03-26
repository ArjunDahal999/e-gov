
import { z } from "zod"

export const todoFormSchema = z.object({
    title: z.string().min(1, { message: "Required" }),
    task: z.string().min(1, { message: "Required" }),
})