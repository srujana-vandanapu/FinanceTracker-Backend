const expenditure = require("../models/expenditureSchema");

const addExpenditure = async (req, res) => {
  const newExpenditure = new expenditure(req.body);
  try {
    await newExpenditure.save();
    res.status(200).json({
      message: "Expenditure Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpenditures = async (req, res) => {
  const Expenditures = await expenditure.find();
  try {
    res.status(200).json(Expenditures);
  } catch (err) {
    console.log(err);
  }
};
const deleteExpenditure = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedExpenditure = await expenditure.findByIdAndDelete(id);
    res.status(200).json(deletedExpenditure);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addExpenditure, getExpenditures, deleteExpenditure };
