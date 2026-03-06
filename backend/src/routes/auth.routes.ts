import express from "express";
import { verifyAdmin } from "../middlewares/verifyAdmin.ts";
import { adminAuth } from "../controllers/auth.controller.ts";

const router = express.Router();

router.post("/login", adminAuth);
router.get("/admin", verifyAdmin);

export default router;