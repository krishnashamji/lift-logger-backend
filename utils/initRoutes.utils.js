import express from "express";
import cors from "cors";
import userRoute from "../routes/users.routes.js"
import exercisesRoute from "../routes/exercises.routes.js"


function initRoutes(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/users", userRoute);
  app.use("/api/exercises", exercisesRoute)
}

export default initRoutes;
