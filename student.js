const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  atttendanceCount: { type: Number, default: 0 },
  absentCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("students", studentSchema);
