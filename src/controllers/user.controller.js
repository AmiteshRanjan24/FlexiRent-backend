const User = require("../models/User");
const { hashPassword } = require("../utils/hash");
const {
  successResponse,
  resourceNotFound,
} = require("../utils/responseHelper");

const createUser = async (req, res, next) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    const user = await User.create({ ...req.body, password: hashedPassword });

    return successResponse(res, 201, "User created successfully", user);
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    return successResponse(res, 200, "Users fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return resourceNotFound(res, "User");
    }
    return successResponse(res, 200, "User fetched successfully", user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = await hashPassword(req.body.password);
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      return resourceNotFound(res, "User");
    }

    return successResponse(res, 200, "User updated successfully", user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return resourceNotFound(res, "User");
    }
    return successResponse(res, 200, "User deleted successfully");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
