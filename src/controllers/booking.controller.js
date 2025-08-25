const Booking = require("../models/Booking");
const {
  successResponse,
  resourceNotFound,
} = require("../utils/responseHelper");

const createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    return successResponse(
      res,
      201,
      "Booking created/Initiated Successfully",
      booking
    );
  } catch (err) {
    next(err);
  }
};

const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    return successResponse(res, 200, "Bookings fetched successfully", bookings);
  } catch (err) {
    next(err);
  }
};

const getBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return resourceNotFound(res, "Booking");
    }

    return successResponse(res, 200, "Booking fetched successfully", booking);
  } catch (err) {
    next(err);
  }
};

const updateBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!booking) {
      return resourceNotFound(res, "Booking");
    }

    return successResponse(res, 200, "Booking updated successfully", booking);
  } catch (err) {
    next(err);
  }
};

const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return resourceNotFound(res, "Booking");
    }

    return successResponse(res, 200, "Booking deleted successfully");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
