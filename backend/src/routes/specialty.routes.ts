import express from "express";
import { create } from "node:domain";
import { addSpecialty } from "../controllers/specialty.controller.ts";


const router = express.Router();

router.post("/specialty/add", addSpecialty);

export default router;