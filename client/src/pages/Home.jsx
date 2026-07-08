// ============================================================
// pages/Home.jsx — Main Application Page
// Combines all components into the full DebugX layout.
// State management lives here and flows down as props.
// ============================================================

import { useState } from "react";

// ── Component Imports ─────────────────────────────────────
import Navbar          from "../components/Navbar";
import Hero            from "../components/Hero";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor, { DEFAULT_CODE } from "../components/CodeEditor";
import AnalyzeButton   from "../components/AnalyzeButton";
import OutputCard      from "../components/OutputCard";
import ResultCard      from "../components/ResultCard";
import Loader          from "../components/Loader";

// ── Service Import ────────────────────────────────────────
import { analyzeCode } from "../services/api";

function Home() {
  // ── Application State ──────────────────────────────────
  const [language, setLanguage] = useState("python"); // Default language
  const [code, setCode]         = useState(DEFAULT_CODE["python"]); // Code in the editor
  const [result, setResult]     = useState(null);      // AI analysis result
  const [loading, setLoading]   = useState(false);     // Request in-flight?
  const [error, setError]       = useState(null);      // Error message if any

  // ── Handle Analyze Click ────────────────────────────────
  const handleAnalyze = async () => {
    // Clear previous results & errors
    setResult(null);
    setError(null);

    // Validate that there is some code to analyze
    if (!code || code.trim().length === 0) {
      setError("⚠️ Please enter some code before analyzing.");
      return;
    }

    setLoading(true);

    try {
      // Call the API service (POST /api/analyze)
      const data = await analyzeCode(language, code);
      setResult(data);
    } catch (err) {
      // Handle network or server errors gracefully
      const message =
        err.response?.data?.error ||
        err.message ||
        "Something went wrong. Please try again.";
      setError(`❌ ${message}`);
    } finally {
      setLoading(false);
    }
  };

  // ── Handle Language Change ──────────────────────────────
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    setCode(DEFAULT_CODE[newLang]); // Reset code when switching language
    setResult(null);  // Clear previous results
    setError(null);
  };

  return (
    <>
      {/* ── Navigation Bar ─────────────────────────── */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* ── Hero Section ───────────────────────────── */}
        <Hero />

        {/* ── Main Editor + Results Layout ───────────── */}
        <section id="editor" className="main-grid mt-2">

          {/* ══════════════════════════════════════════
              LEFT COLUMN — Code Input Panel
          ══════════════════════════════════════════ */}
          <div className="glass-card p-6 flex flex-col gap-6">

            {/* Panel Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/8">
              <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30
                              flex items-center justify-center text-sm">
                ✍️
              </div>
              <div>
                <h2 className="font-bold text-white text-sm">Code Input</h2>
                <p className="text-gray-500 text-xs">Paste or type your code below</p>
              </div>
              {/* Window dots (decorative, VS Code-like) */}
              <div className="ml-auto flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
            </div>

            {/* Language Selector */}
            <LanguageSelector
              value={language}
              onChange={handleLanguageChange}
            />

            {/* Monaco Code Editor */}
            <CodeEditor
              code={code}
              language={language}
              onChange={setCode}
            />

            {/* Error Message */}
            {error && (
              <div
                className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30
                           text-red-300 text-sm font-medium"
                role="alert"
              >
                {error}
              </div>
            )}

            {/* Analyze Button */}
            <AnalyzeButton onClick={handleAnalyze} loading={loading} />
          </div>

          {/* ══════════════════════════════════════════
              RIGHT COLUMN — Analysis Results Panel
          ══════════════════════════════════════════ */}
          <div className="glass-card p-6 overflow-y-auto max-h-[90vh]">

            {/* Panel Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/8 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30
                              flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <h2 className="font-bold text-white text-sm">AI Analysis</h2>
                <p className="text-gray-500 text-xs">Powered by Google Gemini</p>
              </div>
            </div>

            {/* ── Conditional Rendering ───────────────
                Show: Loader | Results | Empty State   */}
            {loading ? (
              /* Loading animation */
              <Loader />
            ) : result ? (
              /* Analysis results */
              <div className="flex flex-col gap-8">
                <OutputCard output={result.output} />
                <ResultCard result={result} />
              </div>
            ) : (
              /* Empty / welcome state */
              <div className="flex flex-col items-center justify-center h-full min-h-[400px]
                              text-center gap-6 text-gray-500 fade-in-up">
                {/* Placeholder icon */}
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10
                                flex items-center justify-center text-4xl shadow-lg
                                animate-[pulse_3s_ease-in-out_infinite] relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full z-0 opacity-50"></div>
                  <span className="relative z-10">🔍</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-2">
                    Ready to Analyze
                  </p>
                  <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    Select a language, write or paste your code on the left, then
                    click{" "}
                    <span className="text-purple-400 font-medium whitespace-nowrap">
                      "Analyze Code"
                    </span>{" "}
                    to get AI insights.
                  </p>
                </div>
                {/* Feature list */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs text-xs mt-2">
                  {["🐛 Bug Detection", "💡 Explanations", "🔧 Smart Fixes", "⏱️ Complexity"].map(
                    (feat) => (
                      <div
                        key={feat}
                        className="px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300
                                   hover:bg-white/10 hover:-translate-y-0.5 hover:border-white/20 transition-all duration-300 shadow-sm"
                      >
                        {feat}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────── */}
        <footer className="text-center mt-16 text-gray-600 text-sm">
          <p>
            Built with ❤️ using{" "}
            <span className="text-purple-400">React</span> ·{" "}
            <span className="text-blue-400">Vite</span> ·{" "}
            <span className="text-green-400">Node.js</span> ·{" "}
            <span className="text-yellow-400">Gemini AI</span>
          </p>
        </footer>
      </main>
    </>
  );
}

export default Home;
