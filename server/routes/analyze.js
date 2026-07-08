// ============================================================
// routes/analyze.js — Analysis Router
// Defines the POST /api/analyze route and delegates to controller.
// ============================================================

const express = require("express");
const router = express.Router();
const { analyzeCode } = require("../controllers/analyzeController");

// POST /api/analyze
// Body: { language: string, code: string }
// Response: { bugs, explanation, suggestedFix, timeComplexity, bestPractices }
router.post("/", analyzeCode);

module.exports = router;
