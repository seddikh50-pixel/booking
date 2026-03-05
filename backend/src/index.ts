import { adminAuth } from '../admin-auth/auth.ts'; // لاحظ .ts هنا
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { prisma } from "../lib/prisma.ts"; // تأكد من المسار الصحيح إلى prisma.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registerAdmin } from '../lib/adminRgister.ts'; // تأكد من المسار الصحيح إلى adminRgister.ts


dotenv.config();


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { verifyAdmin } from '../admin-auth/verifyAdmin.ts';



const app = express();

app.use(express.json());   // لقراءة req.body
app.use(cookieParser());


app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello! seddik   fffff"));


app.post("/api/login", adminAuth);
app.get("/admin", verifyAdmin);
app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true });
});



registerAdmin();

app.listen(4444, () => console.log("Server running on port 4444"));