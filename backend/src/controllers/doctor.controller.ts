import express from "express";
import { prisma } from "../../lib/prisma.ts";
import cloudinary from "../config/cloudinary.ts";
import { doctorSchema } from "../validators/doctor.schema.ts";
import { asyncWrapper } from "../middlewares/asyncWrapper.ts";
import AppError from "../../utils/apiError.ts";





// add a  doctors //////////////////////////////////////////////////

export const addDoctor = asyncWrapper(async (req: express.Request, res: express.Response, next: express.NextFunction) => {


    const parsed = doctorSchema.safeParse(req.body);
    console.log(parsed)

    if (!parsed.success) {
        let msg;
        let specialty = parsed.error.issues[0].path[0]
        if (specialty === "specialization") {
            msg = 'يرجى ادخال التخصص'
        } else {
            msg = parsed.error.issues[0].message
        }

        const error = new AppError(msg, 404, false);
        return next(error)
    }


    const data = parsed.data

    const file = req.file;

    const existingDoctor = await prisma.doctor.findUnique({
        where: {
            email: data.email
        }
    })



    if (existingDoctor) {
        const error = new AppError("تم اضافة هذا الطبيب من قبل", 404, false);
        return next(error)
    }


    if (!file) {
        const error = new AppError("تعذر تحميل الصورة", 404, false);
        return next(error)
    }

    // 1. تحويل الصورة
    const base64 = file.buffer.toString("base64");

    const dataURI = `data:${file.mimetype};base64,${base64}`;


    // 2. رفع إلى Cloudinary
    const result = await cloudinary.uploader.upload(dataURI);



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
            isAvailable: data.isAvailable === "true" ? true : false

        }
    })
    console.log(newDoctor)
    return res.status(200).json({ success: true, msg: 'تم اضافة طبيب بنجاح ', doctor: newDoctor })

})







// get all doctors //////////////////////////////////////////////////


export const getAllDoctors = asyncWrapper(async (req: express.Request, res: express.Response) => {

    const doctors = await prisma.doctor.findMany({
        include: {
            specialization: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return res.status(200).json({ success: true, doctors: doctors })

})


export const changeDoctorStatus = asyncWrapper(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { doctorId, isAvailable } = await req.body

    const changeStatus = await prisma.doctor.update({ where: { id: doctorId }, data: { isAvailable: isAvailable } })
    if (!changeStatus) {
        const error = new AppError("يوجد خلل", 404, false);
        return next(error)

    }

    return res.status(200).json({ success: true, msg: "تم تغيير حالة الطبيب", doctor: changeStatus })



})





export const deleteDoctor = asyncWrapper(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { doctorId } = req.body
    

    const doctor = await prisma.doctor.findUnique({
        where: { id: doctorId }
    });

    if (!doctor) {
        const error = new AppError("تعذر لحذف الطبيب", 404, false);
        return next(error)

    }

    const deletedDoctor = await prisma.doctor.delete({
        where: { id: `${doctorId}` }
    })



    return res.status(200).json({ success: true, msg: "تم حذف الطبيب بنجاح " })


})