import { z } from "zod";

export const areaSchema = z.object({
  code:z.string(),
  name:z.string(),
  total_area: z.number()
})
