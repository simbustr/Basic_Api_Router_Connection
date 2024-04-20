const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const homeRoute = require("./routes/home");

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/", homeRoute);

//port
const port = 7000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// connecting mongodb
mongoose
  .connect("mongodb://localhost:27017/router-app")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
