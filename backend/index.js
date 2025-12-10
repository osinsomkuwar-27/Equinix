require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(3002, () => {
  console.log("Server is running on port 3002");
  mongoose.connect(uri);
  console.log("Connected to MongoDB");
});