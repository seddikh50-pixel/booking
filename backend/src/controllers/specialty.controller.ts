import express from "express";
import { prisma } from "../../lib/prisma.ts";
import { asyncWrapper } from "../middlewares/asyncWrapper.ts";
import AppError from "../../utils/apiError.ts";
import cloudinary from "../config/cloudinary.ts";



export const addSpecialty = asyncWrapper(async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    const { name } = req.body
    const existingSpecialty = await prisma.specialties.findUnique({
        where: {
            name: name
        }
    })

    const file = req.file;

    if (existingSpecialty) {
        const error = new AppError("تم اضافة هذا التخصص من قبل", 404, false);
        return next(error)
    }

    if (!file) {
        const error = new AppError("تعذر تحميل الصورة", 404, false);
        return next(error)
    }


    const base64 = file.buffer.toString("base64");

    const dataURI = `data:${file.mimetype};base64,${base64}`;


    // 2. رفع إلى Cloudinary
    const result = await cloudinary.uploader.upload(dataURI);

    const addSpecialty = await prisma.specialties.create({
        data: {
            name: name,
            image: result.secure_url
        }
    })

    return res.status(200).json({ success: true, msg: "  تم اضافة التخصص بنجاح  ", specialty: addSpecialty })



})


export const getAllSpecialties = asyncWrapper(async (req: express.Request, res: express.Response) => {
    const specialties = await prisma.specialties.findMany()
    return res.status(200).json({ success: true, specialties: specialties })
}
)



export const deleteSpecialty = ((async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { specialtyId } = req.body

    console.log({specialtyId})
    

    const specialty = await prisma.specialties.findUnique({
        where: { id: specialtyId }
    });

    if (!specialty) {
        const error = new AppError("تعذر لحذف الطبيب", 404, false);
        return next(error)

    }

    const deletedSpecialty = await prisma.specialties.delete({
        where: { id: specialtyId }
    })



    return res.status(200).json({ success: true, msg: "تم حذف التخصص بنجاح " })


}))