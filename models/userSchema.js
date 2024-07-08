const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    //Name, Username, Email, Password

    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Username: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", userSchema);
