import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { prisma } from "../../lib/prisma.ts";
dotenv.config();

export const adminAuth = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  const existingAdmin = await prisma.user.findFirst({
    where: { email, role: "ADMIN" },
  })
  if (!existingAdmin) {
    return res.status(404).json({ success: false, msg: "البيانات غير صحيحة " })

  }
  const isPasswordValid = bcrypt.compareSync(password, existingAdmin.password);
  if (!isPasswordValid) {
    return res.status(404).json({ success: false, msg: "البيانات غير صحيحة " })
  }
  const token = jwt.sign({ email },
    process.env.JWT_SECRET as string,
    { "expiresIn": "1h" })
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true في production
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({ success: true, msg: "تم تسجيل الدخول بنجاح" })

};