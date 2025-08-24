const mongoose = require("mongoose");
const { required, lowercase } = require("zod/mini");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "provider"],
    default: "user",
    required: true,
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
