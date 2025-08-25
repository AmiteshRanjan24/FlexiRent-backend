const Vehicle = require("../models/Vehicle");
const {
  successResponse,
  resourceNotFound,
} = require("../utils/responseHelper");

const createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    return successResponse(res, 201, "Vehicle created successfully", vehicle);
  } catch (err) {
    next(err);
  }
};

const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    return successResponse(res, 200, "Vehicles fetched successfully", vehicles);
  } catch (err) {
    next(err);
  }
};

const getVehicleById = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return resourceNotFound(res, "Vehicle");
    }
    return successResponse(res, 200, "Vehicle fetched successfully", vehicle);
  } catch (err) {
    next(err);
  }
};

const updateVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!vehicle) {
      return resourceNotFound(res, "Vehicle");
    }

    return successResponse(res, 200, "Vehicle updated successfully", vehicle);
  } catch (err) {
    next(err);
  }
};

const deleteVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return resourceNotFound(res, "Vehicle");
    }

    return successResponse(res, 200, "Vehicle deleted successfully");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
