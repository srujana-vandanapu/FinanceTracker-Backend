const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://vandanapusrujana:78f64zAK8HVtlcdf@finance-tracker.bz8abkw.mongodb.net/?retryWrites=true&w=majority&appName=Finance-Tracker"
    );
    console.log("db connected");
  } catch (error) {
    console.log("db errorr");
  }
};

module.exports = { db };
