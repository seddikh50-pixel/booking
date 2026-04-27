import express from "express";
import { create } from "node:domain";
import { createUser } from "../controllers/user.controller.ts";


const router = express.Router();

router.post("/user-register", createUser);
// router.get("/admin", verifyAdmin);

export default router;