import { prisma } from "../../lib/prisma.ts";
import { asyncWrapper } from "../middlewares/asyncWrapper.ts";
import express from "express";


export const addSchedule = asyncWrapper(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { doctorId, schedules } = req.body
    const existingDoctorSchedule = await prisma.schedule.findFirst({
        where: {
            doctorId: doctorId,
        },
    });
    if (existingDoctorSchedule) {
        return res.json({ msg: "هذا الطبيب لديه جدول أعمال", success: false })
    }
    const createMany = await prisma.schedule.createMany({
        data: schedules.map((item: any) => ({
            doctorId,
            dayOfWeek: Number(item.dayOfWeek), // convert string -> number
            morningStart: item.morningStart,
            morningEnd: item.morningEnd,
            eveningStart: item.eveningStart,
            eveningEnd: item.eveningEnd,
        })),
    });



    return res.json({ doctorId, createMany })




})


export const getAllSchedules = (async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const getSchedules = await prisma.schedule.findMany()
    return res.status(200).json({ success: true, getSchedules })


})