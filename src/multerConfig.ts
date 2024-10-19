import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "uploads/");
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filter for allowed file types
const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG and PNG files are allowed"), false);
  }
};

// Configure multer for multiple file uploads
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 }, // 1MB size limit
  fileFilter,
});

// 4b- Export a middleware for single or multiple files
export const uploadSingle = upload.single("image"); // for a single file upload
export const uploadMultiple = upload.array("images", 10); // for multiple files (up to 10)
