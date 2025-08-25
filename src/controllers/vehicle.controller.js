const Vehicle = require("../models/Vehicle");

const createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json({
      success: true,
      message: "Vehicle created Successfully",
      data: vehicle,
    });
  } catch (err) {
    next(err);
  }
};

const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({
      success: true,
      count: vehicles.length,
      data: vehicles,
    });
  } catch (err) {
    next(err);
  }
};

const getVehicleById = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }
    res.status(200).json({
      success: true,
      data: vehicle,
    });
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
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle updated successfully",
      data: vehicle,
    });
  } catch (err) {
    next(err);
  }
};

const deleteVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
    });
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
