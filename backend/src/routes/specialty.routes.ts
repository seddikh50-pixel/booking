import express from "express";
import { create } from "node:domain";
import { addSpecialty, getAllSpecialties } from "../controllers/specialty.controller.ts";


const router = express.Router();

router.post("/specialty/add", addSpecialty);
router.get("/specialty/specialties", getAllSpecialties);

export default router;