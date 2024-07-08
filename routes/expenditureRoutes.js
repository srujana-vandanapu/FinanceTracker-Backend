const express = require("express");

const expenditureController = require("../controllers/expenditureControllers");

const router = express.Router();
router.post("/addexpenditure", expenditureController.addExpenditure);
router.get("/getexpenditures", expenditureController.getExpenditures);
router.delete(
  "/deleteexpenditure/:id",
  expenditureController.deleteExpenditure
);

module.exports = router;
