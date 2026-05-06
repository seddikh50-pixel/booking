// // src/middleware/upload.ts
// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import { v2 as cloudinary } from "cloudinary";

// // إعداد Cloudinary
// cloudinary.config({
//   cloud_name: "YOUR_CLOUD_NAME",
//   api_key: "YOUR_API_KEY",
//   api_secret: "YOUR_API_SECRET",
// });

// // التخزين في Cloudinary
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "doctors", // اسم الفولدر في cloudinary
//     allowed_formats: ["jpg", "png", "jpeg"],
//   },
// });

// // multer
// const upload = multer({ storage });

// export default upload;