const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const requireAuth = require("../middlewares/authMiddleware");

router.get("/", requireAuth, userController.getUsers);

router.get("/:id", requireAuth, userController.getUserById);

router.post("/", requireAuth, userController.createUser);

router.put("/:id", requireAuth, userController.updateUser);

router.delete("/:id", requireAuth, userController.deleteUser);

module.exports = router;
