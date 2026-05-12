import express from "express";
import api from "./api.js";
import dotenv from "dotenv";
import cors from "cors";



dotenv.config();
const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", api);
  
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Backend is running...");
});