const income = require("../models/incomeSchema");

const addIncome = async (req, res) => {
  const newIncome = new income(req.body);
  try {
    await newIncome.save();
    res.status(200).json({
      message: "Income Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getIncomes = async (req, res) => {
  const Incomes = await income.find();
  try {
    res.status(200).json(Incomes);
  } catch (err) {
    console.log(err);
  }
};
const deleteIncome = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedIncome = await income.findByIdAndDelete(id);
    res.status(200).json(deleteIncome);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addIncome, getIncomes, deleteIncome };
