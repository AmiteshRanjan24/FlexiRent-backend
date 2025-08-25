const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicle.controller");
const validateRequest = require("../middlewares/validateRequest");
const {
  vehicleSchema,
  updateVehicleSchema,
} = require("../validations/vehicle.validation");
const authMiddleware = require("../middlewares/authMiddleware"); // your JWT auth; must attach req.user
const { requireRole } = require("../middlewares/roleMiddleware");

// Public read endpoints (optional to protect)
router.get("/", vehicleController.getVehicles);
router.get("/:id", vehicleController.getVehicleById);

// Write endpoints — provider-only, with body validation
router.post(
  "/",
  authMiddleware,
  requireRole("provider"),
  validateRequest(vehicleSchema),
  vehicleController.createVehicle
);
router.put(
  "/:id",
  authMiddleware,
  requireRole("provider"),
  validateRequest(updateVehicleSchema),
  vehicleController.updateVehicle
);
router.delete(
  "/:id",
  authMiddleware,
  requireRole("provider"),
  vehicleController.deleteVehicle
);

module.exports = router;
