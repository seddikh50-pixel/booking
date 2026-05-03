import express from "express";
import { create } from "node:domain";
import { addDoctor } from "../controllers/doctor.controller.ts";


const router = express.Router();
console.log("seddik routes loaded...");
router.post("/doctor/add", addDoctor);

export default router;