const mongoose = require("mongoose");
const { string } = require("zod");
const { required } = require("zod/mini");

const vehicleSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vehicleName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["car", "bike", "scooter", "other"],
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = vehicle;
