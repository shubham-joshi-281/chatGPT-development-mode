// File Imports
import express from "express";
import {
  registerController,
  loginController,
} from "../controller/userController.js";

// Rest object
const router = express.Router();

// Register Routes
router.post("/register", registerController);

// Login Routes
router.post("/login", loginController);

export default router;
