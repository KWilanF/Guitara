import express from "express";
import songsRoutes from "./routes/songsRoutes.js";


const router = express.Router();


router.use("/songs", songsRoutes) 

export default router;
