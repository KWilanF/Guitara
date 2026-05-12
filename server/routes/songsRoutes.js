import express from "express";
import songsControllers from "../controllers/songsControllers.js";


const router = express.Router();


router.get("/", songsControllers.getAllSongs)
router.post("/", songsControllers.addNewSongs)


export default router;