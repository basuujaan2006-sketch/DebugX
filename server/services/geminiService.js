// ============================================================
// services/geminiService.js — Google Gemini API Integration
// Crafts a structured prompt and parses the AI response.
// ============================================================

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Gemini client using the API key from .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * buildPrompt — Creates a structured prompt for Gemini
 *
 * We instruct the model to return ONLY valid JSON with 5 specific keys.
 * This makes parsing reliable and predictable.
 *
 * @param {string} language - Programming language (e.g., "python")
 * @param {string} code     - The source code to analyze
 * @returns {string}        - The complete prompt string
 */
const buildPrompt = (language, code) => {
  return `
You are an expert code reviewer and debugger. Analyze the following ${language} code and return a JSON response.

IMPORTANT: Return ONLY valid JSON. No markdown, no code blocks, no explanation outside JSON.

The JSON must have exactly these 6 keys:
{
  "bugs": "Describe any bugs, errors, or potential issues found in the code. If none, say 'No bugs found.'",
  "explanation": "Explain what the code does step by step in simple terms.",
  "suggestedFix": "Provide the corrected version of the code or improvement suggestions.",
  "timeComplexity": "Analyze the time and space complexity (Big O notation) of the code.",
  "output": "Predict the standard output (e.g., console logs, print statements) of this code if it were executed. If none, say 'No output.'",
  "bestPractices": "List 3-5 best practices the developer should follow for this code."
}

Here is the ${language} code to analyze:

\`\`\`${language}
${code}
\`\`\`

Remember: Return ONLY the JSON object. No extra text.
`.trim();
};

/**
 * analyzeWithGemini — Sends code to Gemini and returns parsed analysis
 *
 * @param {string} language - The programming language
 * @param {string} code     - The source code
 * @returns {Promise<Object>} - Parsed JSON with 6 analysis fields
 */
const analyzeWithGemini = async (language, code) => {
  // Use Gemini 2.5 Flash
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  // Build the structured prompt
  const prompt = buildPrompt(language, code);

  // Generate content using the Gemini API
  const result = await model.generateContent(prompt);
  const response = await result.response;

  // Extract raw text from the response
  let rawText = response.text();

  // ── Clean up response ─────────────────────────────────────
  // Sometimes Gemini wraps output in ```json ... ``` blocks.
  // We strip those to get clean JSON.
  rawText = rawText
    .replace(/```json\n?/gi, "")
    .replace(/```\n?/gi, "")
    .trim();

  // ── Parse JSON ────────────────────────────────────────────
  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch (parseError) {
    console.error("❌ JSON parse failed. Raw response:", rawText);
    throw new Error("Gemini returned invalid JSON. Try again.");
  }

  // ── Validate required keys ────────────────────────────────
  const requiredKeys = ["bugs", "explanation", "suggestedFix", "timeComplexity", "output", "bestPractices"];
  for (const key of requiredKeys) {
    if (!parsed[key]) {
      parsed[key] = "Not available.";
    }
  }

  return parsed;
};

module.exports = { analyzeWithGemini };
