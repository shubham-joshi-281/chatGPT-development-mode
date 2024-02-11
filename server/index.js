// File Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import transectionRoutes from "./routes/transectionRoutes.js";
import CONNECTDB from "./db/connectDB.js";

//DotEnv
dotenv.config();

// DataBase Connection
CONNECTDB();

// Rest Object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/transection", transectionRoutes);

// Server Listing
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server Running At ${PORT} `);
});
