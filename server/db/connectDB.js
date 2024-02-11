// File Imports
import mongoose from "mongoose";

// Connecting DataBase
const CONNECTDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ai");
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.log(`Data Base Connection Error is ${error}`);
  }
};

export default CONNECTDB;
