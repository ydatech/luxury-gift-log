import { z } from "zod";
export const createGiftSchema = z.object({
    clientName: z.string()
        .min(1, "Client name is required")
        .max(255, "Client name must be less than 255 characters"),
    propertyAddress: z.string()
        .min(1, "Property address is required")
        .max(255, "Property address must be less than 255 characters"),
    description: z.string()
        .min(1, "Description is required")
        .max(1000, "Description must be less than 1000 characters"),
    category: z.enum([
        "Closing Gift",
        "Refferal Reward",
        "Housewarming"
    ]),
    cost: z.number()
        .positive("Cost must be a positive number")
        .max(1000000, "Cost must be less than 1 million"),
    dateGiven: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
});
export const updateGiftSchema = createGiftSchema.partial();
