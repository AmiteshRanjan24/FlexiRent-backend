const express = require("express");
const morgan = require("morgan");
// const cors = require("cors");/

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const vehicleRoutes = require("./routes/vehicle.routes");
const bookingRoutes = require("./routes/booking.routes");
const requireAuth = require("./middlewares/authMiddleware");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

// Middlewares
// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/auth", authRoutes);
app.use("/users", requireAuth, userRoutes); // Protected user routes
app.use("/vehicles", vehicleRoutes); // Vehicle routes already use requireAuth where needed
app.use("/bookings", bookingRoutes); // Booking routes already use requireAuth where needed

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is running" });
});

// Error handling middleware (catch-all)
app.use(errorHandler);

module.exports = app;
