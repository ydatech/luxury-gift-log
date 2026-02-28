import { Router } from "express";
import { createGift, deleteGift, getGiftById, getGifts, updateGift } from "../controllers/gift.controllers.js";

const router = Router();

// Gifft CRUD routes
router.post("/",createGift);
router.get("/", getGifts);
router.get("/:id", getGiftById);
router.put("/:id", updateGift);
router.delete("/:id", deleteGift);


export default router;