// ============================================================
// app.js — Express Application Setup
// Configures middleware and mounts all API routes.
// ============================================================

const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");

const app = express();

// ── Middleware ──────────────────────────────────────────────
// Allow requests from any origin (our React frontend)
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────
// All analysis endpoints are prefixed with /api/analyze
app.use("/api/analyze", analyzeRoute);

// ── Health Check ─────────────────────────────────────────────
// Simple endpoint to confirm the server is alive
app.get("/", (req, res) => {
  res.json({ message: "DebugX API is running 🚀" });
});

module.exports = app;
