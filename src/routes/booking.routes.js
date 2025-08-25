const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking.controller");
const requireAuth = require("../middlewares/authMiddleware");
const validateRequest = require("../middlewares/validateRequest");

const {
  bookingSchema,
  updateBookingSchema,
} = require("../validations/booking.validation");

router.post(
  "/",
  requireAuth,
  validateRequest(bookingSchema),
  bookingController.createBooking
);

router.get("/", requireAuth, bookingController.getBookings);

router.get("/:id", requireAuth, bookingController.getBookingById);

router.put(
  "/:id",
  requireAuth,
  validateRequest(updateBookingSchema),
  bookingController.updateBooking
);

router.delete("/:id", requireAuth, bookingController.deleteBooking);

module.exports = router;
