import transectionModel from "../models/transectionModel.js";

const addTransection = async (req, res) => {
  try {
    const { amount, category, description, date, userId, type } = req.body;
    if (!amount) {
      return res.status(400).send({
        success: false,
        message: "Amount Is Required",
      });
    }
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "Category Is Required",
      });
    }
    if (!description) {
      return res.status(400).send({
        success: false,
        message: "Description Is Required",
      });
    }
    if (!date) {
      return res.status(400).send({
        success: false,
        message: "Date Is Required",
      });
    }
    if (!type) {
      return res.status(400).send({
        success: false,
        message: "Type Is Required",
      });
    }
    // save DataTransfer

    const transection = new transectionModel({
      amount,
      category,
      description,
      date,
      userId,
      type,
    });
    await transection.save();
    res.status(200).send({
      message: "Transection Created",
      success: true,
      transection,
    });
    transection;
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error In Adding Transection Controller",
      error,
    });
  }
};

const getAllTransection = async (req, res) => {
  try {
    const transection = await transectionModel.find({
      userId: req.body.userId,
    });
    return res.status(200).send({
      count: transection.length,
      success: true,
      message: "Getting All Transection Here",
      transection,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error In Adding Transection Controller",
      error,
    });
  }
};
export { addTransection, getAllTransection };
