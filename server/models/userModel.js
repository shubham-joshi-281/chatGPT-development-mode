// File Imports
import mongoose from "mongoose";

// Creating User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "User Name Is Mandatory"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      require: [true, "User Email Is Mandatory"],
    },
    password: {
      type: String,
      require: [true, "User Password Is Mandatory"],
      minlength: [3, "Password length should be 6 character long"],
      maxlength: 64,
    },
  },
  { timeStamps: true }
);

// User model
const userModel = mongoose.model("user", userSchema);

export default userModel;
