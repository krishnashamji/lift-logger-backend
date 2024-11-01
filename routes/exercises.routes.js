import express from "express";
const router = express.Router();
import * as exercisesController from "../controllers/exercises.controllers.js";
import auth from "../middleware/auth.middleware.js";

// Routes
router.get("/fetchExercises", auth, exercisesController.getExercises)

export default router;
