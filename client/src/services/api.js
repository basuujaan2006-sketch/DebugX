// ============================================================
// services/api.js — Axios API Service
// Handles all HTTP communication with the DebugX backend.
// ============================================================

import axios from "axios";

// Create an Axios instance pointing to our Express backend.
// In development, Vite's proxy redirects /api → http://localhost:5000
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30-second timeout for Gemini AI responses
});

/**
 * analyzeCode — Send code to the backend for AI analysis
 *
 * @param {string} language - The programming language (e.g., "python")
 * @param {string} code     - The source code to analyze
 * @returns {Promise<Object>} - { bugs, explanation, suggestedFix, timeComplexity, bestPractices }
 */
export const analyzeCode = async (language, code) => {
  // POST /api/analyze with the code payload
  const response = await api.post("/analyze", { language, code });

  // Return the data portion of the response (the JSON from our Express server)
  return response.data;
};

export default api;
