import express from "express";
import { create } from "node:domain";
import { addSpecialty, deleteSpecialty, getAllSpecialties } from "../controllers/specialty.controller.ts";
import multer from "multer";


const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});


router.post("/specialty/add",upload.single("image"), addSpecialty);
router.get("/specialty/specialties", getAllSpecialties);
router.delete("/specialty/delete_specialty", deleteSpecialty);

export default router;