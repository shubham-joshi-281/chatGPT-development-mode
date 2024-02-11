import express from "express";
import {
  addTransection,
  getAllTransection,
} from "../controller/transectionController.js";

const router = express.Router();

router.post("/add-transection", addTransection);
router.post("/get-transection", getAllTransection);

export default router;
