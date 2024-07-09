const User = require("../models/userSchema");


const createUser = async (req, res) => {
  const newUser = req.body;

  try {
    const emailExists = await User.findOne({ Email: newUser.Email });
    if (emailExists) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const usernameExists = await User.findOne({ Username: newUser.Username });
    if (usernameExists) {
      return res
        .status(400)
        .json({ message: "User with this username already exists" });
    }

    const user = new User({
      Name: newUser.Name,
      Username: newUser.Username,
      Email: newUser.Email,
      Password: newUser.Password,
    });

    await user.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const checkUser = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await User.findOne({ Email: Email });
    if (user) {
      if (user.Password === Password) {
        res.json({ message: "success", userId: user._id });
      } else {
        res.status(400).json("The password is incorrect");
      }
    } else {
      res.status(400).json("No record existed");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUser = async (req, res) => {
  const user = await User.find();
  try {
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createUser, getUser, checkUser };
