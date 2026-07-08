// ============================================================
// controllers/analyzeController.js — Request Handler
// Validates incoming request data and calls the Gemini service.
// ============================================================

const { analyzeWithGemini } = require("../services/geminiService");

/**
 * analyzeCode - Controller for POST /api/analyze
 *
 * Expects req.body: { language: string, code: string }
 * Returns JSON:     { bugs, explanation, suggestedFix, timeComplexity, bestPractices }
 */
const analyzeCode = async (req, res) => {
  // Destructure the incoming request body
  const { language, code } = req.body;

  // ── Input Validation ──────────────────────────────────────
  if (!language || !code) {
    return res.status(400).json({
      error: "Both 'language' and 'code' fields are required.",
    });
  }

  if (code.trim().length === 0) {
    return res.status(400).json({
      error: "Code cannot be empty.",
    });
  }

  // ── Supported Languages ───────────────────────────────────
  const supportedLanguages = ["c", "cpp", "java", "python", "javascript"];
  if (!supportedLanguages.includes(language.toLowerCase())) {
    return res.status(400).json({
      error: `Unsupported language. Choose from: ${supportedLanguages.join(", ")}`,
    });
  }

  try {
    // Call the Gemini AI service with the user's code and language
    const result = await analyzeWithGemini(language, code);

    // Send the structured analysis result back to the frontend
    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Analysis error:", error.message);

    res.status(500).json({
      error: "Failed to analyze code. Please try again.",
      details: error.message,
    });
  }
};

module.exports = { analyzeCode };
