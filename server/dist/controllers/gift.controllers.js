import { createGiftSchema, updateGiftSchema } from "../schemas/gift.schema.js";
import { prisma } from "../lib/prisma.js";
import { ZodError } from "zod";
import { paginationQuerySchema } from "../schemas/pagination.schema.js";
// 1. Create a new gift
export const createGift = async (req, res) => {
    try {
        // validate request body
        const validated = createGiftSchema.parse(req.body);
        // save to database
        const gift = await prisma.gift.create({
            data: {
                ...validated,
                dateGiven: new Date(validated.dateGiven)
            }
        });
        res.status(201).json(gift);
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.issues.map(issue => ({
                    path: issue.path.join('.'),
                    message: issue.message
                }))
            });
        }
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
// 2. Get all gifts (with search + filtering + pagination)
export const getGifts = async (req, res) => {
    try {
        // validate query params (search, filter, pagination)
        const query = paginationQuerySchema.parse(req.query);
        const { page, limit, search, category } = query;
        const skip = (page - 1) * limit;
        // build prisma query
        const where = {
            AND: [
                search ? {
                    clientName: {
                        contains: search
                    }
                } : {},
                category ? {
                    category
                } : {}
            ]
        };
        // execute query
        const [data, total] = await Promise.all([
            prisma.gift.findMany({
                where,
                skip,
                take: limit,
                orderBy: {
                    dateGiven: "desc"
                }
            }),
            prisma.gift.count({ where })
        ]);
        res.json({
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: "Invalid query parameters",
                errors: error.issues.map(issue => ({
                    path: issue.path.join('.'),
                    message: issue.message
                }))
            });
        }
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
// 3. Get a single gift by ID
export const getGiftById = async (req, res) => {
    try {
        const { id } = req.params;
        const gift = await prisma.gift.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!gift) {
            return res.status(404).json({
                message: "Gift not found"
            });
        }
        res.json(gift);
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
// 4. Update a gift by ID
export const updateGift = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({
            message: "Invalid gift ID"
        });
    }
    try {
        const validated = updateGiftSchema.parse(req.body);
        const gift = await prisma.gift.update({
            where: {
                id
            },
            data: {
                ...validated,
                dateGiven: validated.dateGiven ? new Date(validated.dateGiven) : undefined
            }
        });
        res.json(gift);
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.issues.map(issue => ({
                    path: issue.path.join('.'),
                    message: issue.message
                }))
            });
        }
        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Gift not found"
            });
        }
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
// 5. Delete a gift by ID
export const deleteGift = async (req, res) => {
    try {
        const { id } = req.params;
        const gift = await prisma.gift.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({
            message: "Gift deleted successfully"
        });
    }
    catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Gift not found"
            });
        }
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
