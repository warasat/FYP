import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js"; // Database connection file
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
dotenv.config();
connectDB(); // Connect to MongoDB
connectCloudinary();
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173/", credentials: true }));
app.use(express.json());
app.use(cookieParser());
// API ENDPOINTS
app.use("/api/admin", adminRouter);
// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Listen on PORT
const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
