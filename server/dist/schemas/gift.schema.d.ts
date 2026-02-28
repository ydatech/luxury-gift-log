import { z } from "zod";
export declare const createGiftSchema: z.ZodObject<{
    clientName: z.ZodString;
    propertyAddress: z.ZodString;
    description: z.ZodString;
    category: z.ZodEnum<{
        "Closing Gift": "Closing Gift";
        "Refferal Reward": "Refferal Reward";
        Housewarming: "Housewarming";
    }>;
    cost: z.ZodNumber;
    dateGiven: z.ZodString;
}, z.core.$strip>;
export type CreateGiftInput = z.infer<typeof createGiftSchema>;
export declare const updateGiftSchema: z.ZodObject<{
    clientName: z.ZodOptional<z.ZodString>;
    propertyAddress: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodEnum<{
        "Closing Gift": "Closing Gift";
        "Refferal Reward": "Refferal Reward";
        Housewarming: "Housewarming";
    }>>;
    cost: z.ZodOptional<z.ZodNumber>;
    dateGiven: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateGiftInput = z.infer<typeof updateGiftSchema>;
//# sourceMappingURL=gift.schema.d.ts.map