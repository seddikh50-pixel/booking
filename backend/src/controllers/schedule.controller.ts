import { prisma } from "../../lib/prisma.ts";
import AppError from "../../utils/apiError.ts";
import { asyncWrapper } from "../middlewares/asyncWrapper.ts";
import express from "express";


export const addSchedule = asyncWrapper(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { doctorId, schedules } = req.body
    if (!schedules.length) {
        const error = new AppError("يرجى اضافة برنامج", 404, false);
        return next(error)
    }
    const existingDoctor = await prisma.doctor.findUnique({
        where: {
            id: doctorId
        }
    })
    if (!existingDoctor) {
        const error = new AppError("يرجى اختيار الطبيب ", 404, false);
        return next(error)
    }
    const existingDoctorSchedule = await prisma.schedule.findFirst({
        where: {
            doctorId: doctorId,
        },
    });
    if (existingDoctorSchedule) {
        const error = new AppError(" هذا الطبيب لديه جدول عملي", 404, false);
        return next(error)
    }
    const createMany = await prisma.schedule.createMany({
        data: schedules.map((item: any) => ({
            doctorId,
            dayOfWeek: Number(item.dayOfWeek),
            morningStart: item.morningStart,
            morningEnd: item.morningEnd,
            eveningStart: item.eveningStart,
            eveningEnd: item.eveningEnd,
        }))
    });





    return res.json({ doctorId, createMany })




})


export const getAllSchedules = (async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const getSchedules = await prisma.schedule.findMany()
    return res.status(200).json({ success: true, getSchedules })


})