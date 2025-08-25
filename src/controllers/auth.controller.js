const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/jwt");
const { successResponse, errorResponse } = require("../utils/responseHelper");

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, 400, "User already exists with this email");
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken({ id: user._id, role: user.role });

    return successResponse(res, 201, "User registered successfully", {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    return errorResponse(res, 500, "Server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(res, 401, "Invalid email or password");
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return errorResponse(res, 401, "Invalid email or password");
    }

    const token = generateToken({ id: user._id, role: user.role });

    return successResponse(res, 200, "Login successful", {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return errorResponse(res, 500, "Server error during login");
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return errorResponse(res, 404, "User not found");
    }
    return successResponse(res, 200, "User profile fetched", user);
  } catch (err) {
    console.error("GetMe error:", err);
    return errorResponse(res, 500, "Server error");
  }
};

/**
 * Logout (Client-side token deletion)
 */
const logout = async (req, res) => {
  try {
    // Since JWT is stateless, logout is handled client-side.
    return successResponse(res, 200, "Logged out successfully");
  } catch (err) {
    console.error("Logout error:", err);
    return errorResponse(res, 500, "Server error");
  }
};

module.exports = { register, login, getMe, logout };
