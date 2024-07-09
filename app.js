const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db/db");
const incomeRoutes = require("./routes/incomeRoutes");
const expenditureRoutes = require("./routes/expenditureRoutes");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());


app.use("/income", incomeRoutes);
app.use("/expenditure", expenditureRoutes);
app.use("/user", userRoutes);


app.listen(PORT, () => {
  db();
  console.log("listenening on port", PORT);
});
