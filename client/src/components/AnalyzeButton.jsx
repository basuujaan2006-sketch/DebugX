// ============================================================
// components/AnalyzeButton.jsx — Glow CTA Button
// Triggers the code analysis when clicked.
// ============================================================

/**
 * AnalyzeButton
 *
 * Props:
 *   onClick  {Function} - Called when the button is clicked
 *   loading  {boolean}  - If true, shows spinner and disables button
 */
function AnalyzeButton({ onClick, loading }) {
  return (
    <button
      id="analyze-btn"
      onClick={onClick}
      disabled={loading}
      className="btn-glow w-full py-4 px-6 rounded-xl text-white font-bold text-base
                 flex items-center justify-center gap-3 tracking-wide"
      aria-label={loading ? "Analyzing your code..." : "Analyze code with AI"}
    >
      {loading ? (
        /* ── Loading State ─────────────────────────── */
        <>
          {/* Spinning ring */}
          <svg
            className="w-5 h-5 animate-spin text-white"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          <span>Analyzing with Gemini AI...</span>
        </>
      ) : (
        /* ── Default State ─────────────────────────── */
        <>
          {/* Sparkle icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span>Analyze Code with AI</span>
          <span className="text-purple-300 text-sm font-normal opacity-80">→</span>
        </>
      )}
    </button>
  );
}

export default AnalyzeButton;
