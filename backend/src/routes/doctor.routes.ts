import express from "express";
import multer from "multer";
import { addDoctor, getAllDoctors } from "../controllers/doctor.controller.ts";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/doctor/add",upload.single("image"),   addDoctor);

router.get("/doctor/doctors", getAllDoctors);

export default router;