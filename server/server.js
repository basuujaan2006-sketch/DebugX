// ============================================================
// server.js — Entry Point
// Loads environment variables and starts the HTTP server.
// ============================================================

const dotenv = require("dotenv");
dotenv.config(); // Load .env variables before anything else

const app = require("./app");

const PORT = process.env.PORT || 5000;

// Start listening on the configured port
app.listen(PORT, () => {
  console.log(`✅ DebugX server is running on http://localhost:${PORT}`);
});
