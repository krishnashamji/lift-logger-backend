// Package Imports
import express from "express";

// Init database and routes
import initDB from "./utils/initPrismaDB.utils.js"
import initRoutes from './utils/initRoutes.utils.js'

// Server Code
const app = express();

// Init database
initDB()

// MiddleWares
initRoutes(app);

// Start Server
const port = process.env.PORT || 3000; // Environment vairable

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});