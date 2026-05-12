import express from "express";
import { addSchedule, getAllSchedules } from "../controllers/schedule.controller.ts";

const router = express.Router();


router.post("/schedule/add", addSchedule);
router.get("/schedule/schedules", getAllSchedules);
// router.delete("/specialty/delete_specialty", deleteSpecialty);

export default router;