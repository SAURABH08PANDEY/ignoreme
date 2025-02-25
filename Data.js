const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  data: {
    type: String,
    default: "Vlearn"
  },
});

module.exports = mongoose.model("Data", DataSchema);
