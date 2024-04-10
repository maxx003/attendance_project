const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  attendanceCount: { type: Number, default: 0 },
  attendanceDate: { type: Date, required: false },
  absentCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Record", recordSchema);
