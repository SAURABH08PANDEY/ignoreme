const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 6060;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("private.pem", "utf8");
const { generateFreshdeskJWT } = require("./generateFreshdeskJWT");
const connectDB = require("./connectDB");
const Data = require("./Data");

app.get("/freshdesk/sso", (req, res) => {
  const user = {
    name: req.query.name || "Saurabh Pandey",
    email: req.query.email || "saurabh.pandey@herovired.com",
  };

  console.log(user, "111111111111111111111");

  const token = generateFreshdeskJWT(user);
  const redirectUrl = `https://herovired.freshdesk.com/support/tickets/49241?jwt=${token}`;
  console.log(redirectUrl, "222222222222222222222");
  res.status(200).json({ redirectionUrl: redirectUrl });
  // res.redirect(redirectUrl);
});

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

// module.exports = app;
