// ============================================================
// components/Hero.jsx — Hero / Header Section
// Displays the main title, subtitle, and feature pills.
// ============================================================

function Hero() {
  return (
    <section
      id="about"
      className="relative text-center py-20 px-4 max-w-4xl mx-auto"
    >
      {/* ── Background Glow behind text ───────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        {/* ── Top Badge ─────────────────────────────────── */}
        <div className="flex justify-center mb-8 fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            AI-Powered • Google Gemini
          </span>
        </div>

        {/* ── Main Title ────────────────────────────────── */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 fade-in-up fade-in-up-delay-1">
          <span className="gradient-text drop-shadow-sm">DebugX</span>
        </h1>

        {/* ── Subtitle ──────────────────────────────────── */}
        <p className="text-xl sm:text-2xl text-gray-200 font-semibold mb-5 fade-in-up fade-in-up-delay-2 tracking-wide">
          AI Powered Code Analysis & Debugging
        </p>

        {/* ── Description ───────────────────────────────── */}
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12 fade-in-up fade-in-up-delay-3">
          Paste your code, pick your language, and let Gemini AI instantly find
          bugs, explain logic, suggest fixes, analyze complexity, and recommend
          best practices.
        </p>

        {/* ── Feature Pills ─────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-4 fade-in-up fade-in-up-delay-4">
          {[
            { icon: "🐛", label: "Bug Detection" },
            { icon: "💡", label: "Explanations" },
            { icon: "🔧", label: "Smart Fixes" },
            { icon: "⏱️", label: "Complexity Analysis" },
            { icon: "✅", label: "Best Practices" },
          ].map((pill) => (
            <div
              key={pill.label}
              className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-xl text-sm font-medium text-gray-300
                         border border-white/5 shadow-sm
                         hover:text-white hover:bg-white/10 hover:border-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">{pill.icon}</span>
              <span>{pill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
