import express from "express";
import { prisma } from "../../lib/prisma.ts";
import cloudinary from "../config/cloudinary.ts";
import { doctorSchema } from "../validators/doctor.schema.ts";





// add a  doctors //////////////////////////////////////////////////

export const addDoctor = async (req: express.Request, res: express.Response) => {

    try {
        const parsed = doctorSchema.safeParse(req.body);

        if (!parsed.success) {
            let msg;
            let specialty = parsed.error.issues[0].path[0]
            if (specialty === "specialization") {
                msg = 'يرجى ادخال التخصص'
            } else {
                msg = parsed.error.issues[0].message
            }

            return res.status(400).json({
                success: false,
                msg: msg
            });
        }


        const data = parsed.data

        const file = req.file;


        if (!file) {
            return res.status(400).json({ msg: "No image" });
        }

        // 1. تحويل الصورة
        const base64 = file.buffer.toString("base64");

        const dataURI = `data:${file.mimetype};base64,${base64}`;


        // 2. رفع إلى Cloudinary
        const result = await cloudinary.uploader.upload(dataURI);


        const existingDoctor = await prisma.doctor.findUnique({
            where: {
                email: data.email
            }
        })



        if (existingDoctor) {
            return res.status(404).json({ success: false, msg: "هذا الطبيب موجود " })
        }
        const newDoctor = await prisma.doctor.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                password: data.password,
                bio: data.bio,
                phone: data.phone,
                specializationId: data.specialization,
                image: result.secure_url,
                experience: parseInt(data.experience),
                consultationFee: parseInt(data.consultationFee),
                location: data.location,
                isAvailable: data.isAvailable === "true" || data.isAvailable === true

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



// get all doctors //////////////////////////////////////////////////


export const getAllDoctors = async (req: express.Request, res: express.Response) => {
    try {
        const doctors = await prisma.doctor.findMany({
            include: {
                specialization: true
            }
        });
        
return res.status(200).json({ success: true, doctors: doctors })
    } catch (error) {

    return res.status(500).json({
        success: false,
        msg: "خطأ في السيرفر",
        error: error instanceof Error ? error.message : error
    });


}
}
