const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  specialization: String,
  experience: Number,
  availability: String, // e.g. "Mon-Fri 9am-5pm"
});

module.exports = mongoose.model("Doctor", doctorSchema);
