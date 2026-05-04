
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { prisma } from "../lib/prisma.ts"; // تأكد من المسار الصحيح إلى prisma.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { registerAdmin } from '../lib/adminRgister.ts'; // تأكد من المسار الصحيح إلى adminRgister.ts
import authRoutes from "./routes/auth.routes.ts"; // تأكد من المسار الصحيح إلى auth.routes.ts
import userRoutes from "./routes/user.routes.ts"; // تأكد من المسار الصحيح إلى auth.routes.ts
import doctorRoutes from "./routes/doctor.routes.ts"; // تأكد من المسار الصحيح إلى doctor.routes.ts
import specialtyRoutes from "./routes/specialty.routes.ts"; // تأكد من المسار الصحيح إلى doctor.routes.ts




dotenv.config();


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { addDoctor } from "./controllers/doctor.controller.ts";



const app = express();

app.use(express.json());   // لقراءة req.body
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));


app.use("/api", authRoutes);
app.use("/api", userRoutes)
app.use("/api", doctorRoutes)
app.use("/api", specialtyRoutes)



app.use(bodyParser.json());




app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true });
});




app.listen(4444, () => console.log("Server running on port 4444"));