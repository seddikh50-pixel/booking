import express from "express";
import { prisma } from "../../lib/prisma.ts";



export const addSpecialty = async (req: express.Request, res: express.Response) => {
    try {
        const { name, image } = req.body
        const existingSpecialty = await prisma.specialties.findUnique({
            where: {
                name: name
            }
        })
        console.log({ existingSpecialty })


        if (existingSpecialty) {
            return res.status(400).json({ success: false, msg: "هذا التخصص موجود " })
        }

        const addSpecialty = await prisma.specialties.create({
            data: {
                name: name,
                image: image
            }
        })

        return res.status(200).json({ success: true, msg: "  تم اضافة التخصص بنجاح  ", specialty: addSpecialty })





    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            msg: "خطأ في السيرفر",
            error: error instanceof Error ? error.message : error
        });

    }




}
