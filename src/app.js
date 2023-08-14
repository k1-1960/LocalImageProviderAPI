import express from "express";
import morgan from "morgan";
import cors from "cors";
import os from "os";

// import middlewares & routes
import VerifyAPIKey from "./middlewares/VerifyAPIKey.js";
import ImageRouter from "./routes/image.js";

const app = express();

app.set("PORT", process.env.PORT || 3001);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(VerifyAPIKey);

// Setting the routes
app.use("/image", ImageRouter);

export default app;
