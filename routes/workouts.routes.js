import express from "express";
const router = express.Router();
import * as workoutsController from "../controllers/workouts.controllers.js"
import auth from "../middleware/auth.middleware.js";

// Routes
router.post("/createWorkout", auth, workoutsController.createWorkout);
router.post("/logWorkout", auth, workoutsController.logWorkout);

export default router;
