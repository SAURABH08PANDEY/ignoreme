const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 6060;
const connectDB = require("./connectDB");
const Data = require("./Data");
const { default: axios } = require("axios");

const privateKey = fs.readFileSync(path.join(__dirname, "private.key"), "utf8");

let isDBConnected = false;

const initializeDB = async () => {
  try {
    await connectDB();
    isDBConnected = true;
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
  }
};

// Ensure DB is connected before processing requests
const ensureDBConnection = async (req, res, next) => {
  if (!isDBConnected) {
    console.log("⏳ Waiting for MongoDB to connect...");
    await initializeDB();
  }
  next();
};

// Apply middleware to ensure DB connection before saving data
app.use(ensureDBConnection);

app.get("/generate-jwt", async (req, res) => {
  try {
    const data = req.query;
    const user = {
      id: "9443",
      email: "saurabh.pandey@herovired.com",
      firstName: "Saurabh Pandey",
      lastName: "Pandey",
    };
    const payload = {
      sub: user?.id,
      email: user?.email,
      iat: Math.floor(Date.now() / 1000),
      nonce: data?.nonce,
      given_name: user?.firstName,
      // family_name: user.lastName,
    };
    const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });
    const url = `${data?.redirect_uri}?state=${data?.state}&id_token=${token}`;
    await Data.create({
      data: JSON.stringify({
        url,
        data,
        payload,
        privateKey,
        hello: req.headers.origin
      }),
    });
    // res.status(200).json({ url });
    res.redirect(url);
  } catch (error) {
    console.error("JWT Generation Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "HELLO WORLD" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Start the server only after DB connection is initialized
initializeDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running at ${port}`);
  });
});

// module.exports = app;
