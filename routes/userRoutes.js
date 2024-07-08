const express = require("express");

const userController = require("../controllers/userControllers");

const router = express.Router();
router.post("/createuser", userController.createUser);
router.get("/getusers", userController.getUser);
router.post("/checkuser", userController.checkUser);

module.exports = router;
