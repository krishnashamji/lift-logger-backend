import express from "express";
const router = express.Router();
import * as userController from "../controllers/users.controllers.js";

// Routes
router.post("/authorizeUser", userController.authorizeUser);

export default router;
