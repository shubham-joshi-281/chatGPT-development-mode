// File Imports
import { comparePassword, hashPassword } from "../helper/auth.js";
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Register Controller
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation of all Fields
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name Is Mandatory",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email Is Mandatory",
      });
    }
    if (!password) {
      return res.status(400).send({
        success: false,
        message: "Password Is Mandatory",
      });
    }

    // User Allready Exist
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User Allready Registerd",
      });
    }

    // hashing Password
    const hashedPassword = await hashPassword(password);

    // Save User Or Register User
    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();
    return res.status(200).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error In Register Controller",
      error,
    });
  }
};

// Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation Of All Fields
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please Provide Email Or Password",
      });
    }

    // Find User
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User Not Found",
      });
    }

    // Password Compairing
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.ststus(404).send({
        success: false,
        message: "Invalid crediential",
      });
    }

    // JWT TOKEN
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // login User
    res.status(200).send({
      success: true,
      message: "User Login Successfully",
      user,
      token,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error In Login Controller",
      error,
    });
  }
};

export { registerController, loginController };
