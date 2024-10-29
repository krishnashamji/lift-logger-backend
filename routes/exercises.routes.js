import express from "express";
const router = express.Router();
import * as exercisesController from "../controllers/exercises.controllers.js";

// Routes
router.get("/fetchExercises", exercisesController.getExercises)

export default router;
