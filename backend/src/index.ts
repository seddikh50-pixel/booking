import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.routes.ts";
import userRoutes from "./routes/user.routes.ts";
import doctorRoutes from "./routes/doctor.routes.ts";
import specialtyRoutes from "./routes/specialty.routes.ts";
import scheduleRoutes from "./routes/schedule.route.ts"



dotenv.config();

const app = express();


// ======================
// 1. CORS (لازم أول شيء)
// ======================
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

// ======================
// 2. Body parsers
// ======================
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ❌ احذف bodyParser نهائيًا
// app.use(bodyParser.json());

// ======================
// 3. Cookies
// ======================
app.use(cookieParser());

// ======================
// 4. Routes
// ======================
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", doctorRoutes);
app.use("/api", specialtyRoutes);
app.use("/api", scheduleRoutes);


app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, msg: "تم تسجيل الخروج بنجاح" });
});

app.get("/api/text", (req, res, next) => {
  try {

    res.json({ msg: "seddik" })

  } catch (error) {
    next(error)
  }
});


// app.all("*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     return res.status(404).json({msg : "this resource is not found "})
// })
app.use((req, res) => {
  res.status(404).json({ msg: "this resource is not found" });
});

// handle error middleware 
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(err.message , err.status , err.success)
  res.status(err.status || 500).json({ success: err.success, msg: err.message })
})
// ======================
// 5. logout route
// ======================

app.listen(4444, () => console.log("Server running on port 4444"));