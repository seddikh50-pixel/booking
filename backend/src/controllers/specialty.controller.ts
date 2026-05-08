import express from "express";
import { prisma } from "../../lib/prisma.ts";
import { asyncWrapper } from "../middlewares/asyncWrapper.ts";
import AppError from "../../utils/apiError.ts";



export const addSpecialty = asyncWrapper(async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    const { name, image } = req.body
    const existingSpecialty = await prisma.specialties.findUnique({
        where: {
            name: name
        }
    })


    if (existingSpecialty) {
        const error = new AppError("تم اضافة هذا التخصص من قبل", 404, false);
        return next(error)
    }

    const addSpecialty = await prisma.specialties.create({
        data: {
            name: name,
            image: image
        }
    })

    return res.status(200).json({ success: true, msg: "  تم اضافة التخصص بنجاح  ", specialty: addSpecialty })



})


export const getAllSpecialties = asyncWrapper(async (req: express.Request, res: express.Response) => {
    const specialties = await prisma.specialties.findMany()
    return res.status(200).json({ success: true, specialties: specialties })
}
)
