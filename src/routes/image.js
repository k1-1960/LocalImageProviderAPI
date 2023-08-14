import { Router } from "express";
import HandleUpload from "../multer.config.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Nada que ver aqui.",
  });
});
router.post("/upload", HandleUpload.single("image"), (req, res) => {
  res.status(200).json({
    message: "Imagen guardada.",
  });
});

export default router;
