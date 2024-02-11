import express from "express";
import {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
  pythonconverterController,
  dictonaryController,
  hindiDictonaryController,
  emailController,
} from "../controller/openAiController.js";

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/email", emailController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/python-converter", pythonconverterController);
router.post("/image", scifiImageController);
router.post("/dictonary", dictonaryController);
router.post("/hindi-dictonary", hindiDictonaryController);

export default router;
