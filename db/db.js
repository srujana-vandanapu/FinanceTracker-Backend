const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb://localhost:27017/financeTracker"
    );
    console.log("db connected");
  } catch (error) {
    console.log("db errorr");
  }
};

module.exports = { db };
