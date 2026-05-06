import express from "express"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyAdmin = async (req: express.Request, res: express.Response) => {
  try {
    const token = await req.cookies.token;

    if (!token) {
      console.log({token})
      return res.status(401).json({ success: false , msg: "غير مصرح" });
    }

    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET as string);
    if (!verifyToken) {
      return res.status(401).json({ msg: "غير مصرح" });
    }

    return res.status(200).json({ success: true, msg: "مرحبًا بك الأدمن" });

  } catch (error) {
    return res.status(401).json({ success: false , msg: "غير مصرح" });

  }

} 