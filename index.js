const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const port = process.env.PORT || 6060;
const connectDB = require("./connectDB");
const Data = require("./Data");

// Global variable to check if DB is connected
let isDBConnected = false;

// Function to establish DB connection and update flag
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
    await Data.create({ data: JSON.stringify(data) }); // Ensure it waits
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

// Start the server only after DB connection is initialized
initializeDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running at ${port}`);
  });
});

// module.exports = app;
