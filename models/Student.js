const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  sem: String,
  section: String,
  results: {
    DBMS: Number,
    MicroControllers: Number,
    ADA: Number
  }
});

module.exports = mongoose.model("Student", studentSchema);
