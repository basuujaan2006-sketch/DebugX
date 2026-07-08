// ============================================================
// services/groqService.js — Groq API Integration
// Uses Groq's lightning-fast inference with Llama 3.3 70B model.
// ============================================================

const Groq = require("groq-sdk");

// Initialize Groq client using the API key from .env
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * buildPrompt — Creates a structured prompt for the AI
 *
 * We ask the model to return ONLY valid JSON with 5 specific keys.
 *
 * @param {string} language - Programming language (e.g., "python")
 * @param {string} code     - The source code to analyze
 * @returns {string}        - The complete prompt string
 */
const buildPrompt = (language, code) => {
  return `You are an expert code reviewer and debugger. Analyze the following ${language} code and return a JSON response.

IMPORTANT: Return ONLY valid JSON. No markdown, no code blocks, no explanation outside JSON.

The JSON must have exactly these 5 keys:
{
  "bugs": "Describe any bugs, errors, or potential issues found in the code. If none, say 'No bugs found.'",
  "explanation": "Explain what the code does step by step in simple terms.",
  "suggestedFix": "Provide the corrected version of the code or improvement suggestions.",
  "timeComplexity": "Analyze the time and space complexity (Big O notation) of the code.",
  "bestPractices": "List 3-5 best practices the developer should follow for this code."
}

Here is the ${language} code to analyze:

\`\`\`${language}
${code}
\`\`\`

Remember: Return ONLY the JSON object. No extra text before or after.`;
};

/**
 * analyzeWithGroq — Sends code to Groq and returns parsed analysis
 *
 * @param {string} language - The programming language
 * @param {string} code     - The source code
 * @returns {Promise<Object>} - Parsed JSON with 5 analysis fields
 */
const analyzeWithGroq = async (language, code) => {
  // Use Llama 3.3 70B — extremely fast and highly capable
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an expert code reviewer. Always respond with valid JSON only. No markdown formatting, no code blocks wrapping the JSON, just the raw JSON object.",
      },
      {
        role: "user",
        content: buildPrompt(language, code),
      },
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,       // Low temperature for consistent, factual output
    max_tokens: 2048,
    response_format: { type: "json_object" }, // Force JSON output mode
  });

  // Extract the text content from the response
  const rawText = chatCompletion.choices[0]?.message?.content || "";

  // ── Parse JSON ────────────────────────────────────────────
  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch (parseError) {
    console.error("❌ JSON parse failed. Raw response:", rawText);
    throw new Error("AI returned invalid JSON. Please try again.");
  }

  // ── Ensure all required keys exist ────────────────────────
  const requiredKeys = [
    "bugs",
    "explanation",
    "suggestedFix",
    "timeComplexity",
    "bestPractices",
  ];
  for (const key of requiredKeys) {
    if (!parsed[key]) {
      parsed[key] = "Not available.";
    }
  }

  return parsed;
};

module.exports = { analyzeWithGroq };
