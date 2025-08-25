const express = require("express");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const vehicleRoutes = require("./routes/vehicle.routes");
const bookingRoutes = require("./routes/booking.routes");
const requireAuth = require("./middlewares/authMiddleware");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/auth", authRoutes);
app.use("/users", requireAuth, userRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/bookings", bookingRoutes);

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is running" });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
