import { z } from "zod"

export const EmailSchema = z.object({
  email: z.string().email({
    message: "Please Enter Valid Email",
  }),
})