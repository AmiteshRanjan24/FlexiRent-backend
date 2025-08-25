const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const validateRequest = require("../middlewares/validateRequest");
const authSchema = require("../validations/auth.validation");
const requireAuth = require("../middlewares/authMiddleware");

router.post("/register", validateRequest(authSchema), authController.register);

router.post(
  "/login",
  validateRequest(authSchema.pick({ email: true, password: true })),
  authController.login
);

router.get("/me", requireAuth, authController.getMe);

router.post("/logout", authController.logout);

module.exports = router;
