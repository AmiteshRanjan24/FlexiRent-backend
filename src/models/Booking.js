const mongoose = require("mongoose");
const { required } = require("zod/mini");

const BookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "approved", "declined"],
    default: "pending",
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
