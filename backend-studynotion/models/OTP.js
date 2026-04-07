const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: true, // ⚡ fast query
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // 🔥 auto delete in 5 min
  },
});

module.exports = mongoose.model("OTP", otpSchema);