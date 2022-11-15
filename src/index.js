require("dotenv").config();

const express = require('express');
const cors = require('cors');

const connectDB = require("./database")
connectDB();

const app = express();

app.use(express.json())

app.use(cors ({ credentials: true, origin: 'http://localhost:3000'}))

app.listen(5000, () => {
  console.log("application start")
});
