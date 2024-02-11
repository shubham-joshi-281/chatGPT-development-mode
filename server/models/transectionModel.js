import mongoose from "mongoose";

const transectionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: [true, "User Id Is Required"],
    },
    amount: {
      type: Number,
      require: [true, "Amount is Required"],
    },
    type: {
      type: String,
      require: [true, "Type is Required"],
    },
    category: {
      type: String,
      require: [true, "Category is Required"],
    },
    refrence: {
      type: String,
      require: "default",
    },
    description: {
      type: String,
      require: [true, "Description is Required"],
    },
    date: {
      type: String,
      require: [true, "Date is Required"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transection", transectionSchema);

export default transectionModel;
