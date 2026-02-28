import z from "zod";

export const paginationQuerySchema = z.object({
    page: z
    .string()
    .optional()
    .default("1")
    .transform((val) => parseInt(val))
    .refine(val=>val>0, "Page must be > 0"),
    limit: z
    .string()
    .optional()
    .default("10")
    .transform((val) => parseInt(val))
    .refine(val=>val>0 && val<=100, "Limit must be between 1 and 100"),
    search: z.string().optional().default(""),
    category: z.string().optional().default("")
})

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;