import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

// Test endpoint
app.get("/api/test", async (req, res) => {
    res.json({ message: "hello from express endpoint" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Start the server
app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
});