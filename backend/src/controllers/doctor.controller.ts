import express from "express";
import { prisma } from "../../lib/prisma.ts";



export const addDoctor = async (req: express.Request, res: express.Response) => {
    try {
        const { fullName, email, password, bio, phone, specialization, image, experience, consultationFee, location, isAvailable } = req.body;
        console.log(fullName, email, password, bio, phone, specialization,  image, parseInt(experience), consultationFee, location, isAvailable)
        const existingDoctor = await prisma.doctor.findUnique({
            where: {
                email: email
            }
        })
        if (existingDoctor) {
            return res.status(404).json({ success: false, msg: "هذا الطبيب موجود " })
        }
        const newDoctor = await prisma.doctor.create({
            data: {
                fullName,
                email,
                password,
                bio,
                phone,
                specialization,
                image,
                experience: parseInt(experience),
                consultationFee: parseInt(consultationFee),
                location,
                isAvailable

            }
        })
        return res.status(200).json({ success: true, msg: 'تم اضافة طبيب بنجاح ', doctor: newDoctor })
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            msg: "خطأ في السيرفر",
            error: error instanceof Error ? error.message : error
        });

    }




}
