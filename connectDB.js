const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    return mongoose.connect(process.env.MONGODB_CONNECTION_URL);

  } catch (err) {
    console.error("Error during DB connection setup:", err);
    throw err;
  }
};

module.exports = connectDB;
