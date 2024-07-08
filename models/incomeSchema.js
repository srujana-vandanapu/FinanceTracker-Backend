const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema(
  {
    //incomeText, incomeCost, incomeDate

    incomeText: {
      type: String,
      required: true,
      trim: true,
    },
    incomeCost: {
      type: Number,
      required: true,
      trim: true,
    },
    incomeDate: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  { collection: "Income" }
);

module.exports = mongoose.model("Income", incomeSchema);
