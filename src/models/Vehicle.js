const mongoose = require("mongoose");
const { string } = require("zod");
const { required } = require("zod/mini");

const VehicleSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vehicleCompany: {
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
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;
