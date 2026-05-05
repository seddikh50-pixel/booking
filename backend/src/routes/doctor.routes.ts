import express from "express";
import { create } from "node:domain";
import { addDoctor, getAllDoctors } from "../controllers/doctor.controller.ts";


const router = express.Router();
router.post("/doctor/add", addDoctor);
router.get("/doctor/doctors" , getAllDoctors )

export default router;