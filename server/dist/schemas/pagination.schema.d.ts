import z from "zod";
export declare const paginationQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodDefault<z.ZodOptional<z.ZodString>>, z.ZodTransform<number, string>>;
    limit: z.ZodPipe<z.ZodDefault<z.ZodOptional<z.ZodString>>, z.ZodTransform<number, string>>;
    search: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    category: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.z.core.$strip>;
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
//# sourceMappingURL=pagination.schema.d.ts.map