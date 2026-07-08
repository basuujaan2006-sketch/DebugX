// ============================================================
// components/Loader.jsx — Full-Panel Loading Animation
// Shown on the right panel while waiting for the AI response.
// ============================================================

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-8">

      {/* ── Animated Gemini Logo Ring ─────────────────── */}
      <div className="relative w-24 h-24">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin" />
        {/* Inner spinning ring (opposite direction) */}
        <div
          className="absolute inset-2 rounded-full border-2 border-blue-500/40"
          style={{ animation: "spin 1.5s linear infinite reverse" }}
        />
        {/* Center icon */}
        <div className="absolute inset-4 rounded-full btn-glow flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>
      </div>

      {/* ── Text ─────────────────────────────────────── */}
      <div className="text-center">
        <p className="text-white font-semibold text-lg mb-2">
          Analyzing your code...
        </p>
        <p className="text-gray-400 text-sm">
          Gemini AI is reviewing for bugs, complexity & best practices
        </p>
      </div>

      {/* ── Bouncing Dots ─────────────────────────────── */}
      <div className="flex gap-3 items-center">
        <div className="loading-dot" />
        <div className="loading-dot" />
        <div className="loading-dot" />
      </div>

      {/* ── Shimmer Skeleton Sections ─────────────────── */}
      <div className="w-full max-w-sm space-y-3">
        {["Scanning for bugs...", "Analyzing complexity...", "Reviewing best practices..."].map(
          (label, i) => (
            <div key={i} className="flex items-center gap-3">
              {/* Small pulsing dot */}
              <div
                className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              {/* Shimmer bar */}
              <div
                className="flex-1 h-3 rounded-full shimmer"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              <span className="text-xs text-gray-500 whitespace-nowrap">{label}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Loader;
