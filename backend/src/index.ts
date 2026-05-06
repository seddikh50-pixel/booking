import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.routes.ts";
import userRoutes from "./routes/user.routes.ts";
import doctorRoutes from "./routes/doctor.routes.ts";
import specialtyRoutes from "./routes/specialty.routes.ts";

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


// ======================
// 5. logout route
// ======================
app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true });
});

app.listen(4444, () => console.log("Server running on port 4444"));