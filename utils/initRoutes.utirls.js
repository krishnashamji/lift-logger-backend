import express from "express";
import cors from "cors";
import userRoute from "../routes/user.route.js"

function initRoutes(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/users", userRoute);
}

export default initRoutes;
