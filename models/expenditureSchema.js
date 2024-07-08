const mongoose = require("mongoose");

const expenditureSchema = mongoose.Schema(
  {
    //ExpenditureText && ExpenditureDate && ExpenditureCost

    ExpenditureText: {
      type: String,
      required: true,
      trim: true,
    },
    ExpenditureCost: {
      type: Number,
      required: true,
      trim: true,
    },
    ExpenditureDate: {
      type: Date,
      required: true,
      trim: true,
    },
    ExpenditureCategory: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "Expenditure" }
);

module.exports = mongoose.model("Expenditure", expenditureSchema);
