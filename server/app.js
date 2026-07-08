// ============================================================
// app.js — Express Application Setup
// ============================================================

const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");

const app = express();

// ============================================================
// CORS Configuration
// ============================================================

app.use(
  cors({
    origin: true, // Allow all origins
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

// Handle preflight requests
app.options("*", cors());

// ============================================================
// Middleware
// ============================================================

app.use(express.json());

// ============================================================
// Routes
// ============================================================

app.use("/api/analyze", analyzeRoute);

// ============================================================
// Health Check
// ============================================================

app.get("/", (req, res) => {
  res.json({
    message: "DebugX API is running 🚀",
  });
});

module.exports = app;