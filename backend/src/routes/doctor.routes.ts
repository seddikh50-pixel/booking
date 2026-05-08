import express from "express";
import multer from "multer";
import { addDoctor, changeDoctorStatus, deleteDoctor, getAllDoctors } from "../controllers/doctor.controller.ts";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/doctor/add",upload.single("image"),   addDoctor);
router.patch("/doctor/change_status",   changeDoctorStatus);
router.delete("/doctor/delete_doctor",   deleteDoctor);


router.get("/doctor/doctors", getAllDoctors);

export default router;