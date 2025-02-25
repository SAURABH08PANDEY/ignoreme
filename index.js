const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 6060;
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const fs = require("fs");
// const privateKey = fs.readFileSync("private.pem", "utf8");
// const { generateFreshdeskJWT } = require("./generateFreshdeskJWT");
const connectDB = require("./connectDB");
const Data = require("./Data");

app.get("/generate-jwt", (req, res) => {
  try {
    const data = req.query;
    Data.create({ data: JSON.stringify(data) });
    res.status(200).json({ token: "hello" });
  } catch (error) {
    console.error("JWT Generation Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "HELLO BITCHES" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, async () => {
  try {
    await connectDB();
  console.log(`Sever is running at ${port}`);
  } catch (error) {
    console.log(`Sever is not running at ${error.message}`)
  }
});

module.exports = app;
