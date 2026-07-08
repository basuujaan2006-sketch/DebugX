// ============================================================
// components/ResultCard.jsx — Analysis Results Panel
// Renders 5 structured sections from the Gemini AI response.
// ============================================================

// Configuration for each result section
// Each section has an icon, title, color accent, and a key matching the API response
const SECTIONS = [
  {
    key:   "bugs",
    icon:  "🐛",
    title: "Bugs Found",
    desc:  "Issues detected in your code",
    color: "red",
    // Tailwind classes for styling the section header and border
    headerClass: "text-red-400",
    borderClass: "hover:border-red-500/30",
    badgeClass:  "bg-red-500/10 border-red-500/20 text-red-300",
  },
  {
    key:   "explanation",
    icon:  "💡",
    title: "Explanation",
    desc:  "What the code does, step by step",
    color: "yellow",
    headerClass: "text-yellow-400",
    borderClass: "hover:border-yellow-500/30",
    badgeClass:  "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
  },
  {
    key:   "suggestedFix",
    icon:  "🔧",
    title: "Suggested Fix",
    desc:  "Corrected code or improvement tips",
    color: "green",
    headerClass: "text-green-400",
    borderClass: "hover:border-green-500/30",
    badgeClass:  "bg-green-500/10 border-green-500/20 text-green-300",
  },
  {
    key:   "timeComplexity",
    icon:  "⏱️",
    title: "Time Complexity",
    desc:  "Big O analysis of your code",
    color: "blue",
    headerClass: "text-blue-400",
    borderClass: "hover:border-blue-500/30",
    badgeClass:  "bg-blue-500/10 border-blue-500/20 text-blue-300",
  },
  {
    key:   "bestPractices",
    icon:  "✅",
    title: "Best Practices",
    desc:  "Tips to write cleaner, better code",
    color: "purple",
    headerClass: "text-purple-400",
    borderClass: "hover:border-purple-500/30",
    badgeClass:  "bg-purple-500/10 border-purple-500/20 text-purple-300",
  },
];

/**
 * ResultCard
 *
 * Props:
 *   result {Object} - The analysis result from the Gemini API
 *     { bugs, explanation, suggestedFix, timeComplexity, bestPractices }
 */
function ResultCard({ result }) {
  return (
    <div className="flex flex-col gap-4">
      {/* ── Panel Header ────────────────────────────── */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>🤖</span>
          <span>AI Analysis Results</span>
        </h2>
        <span className="section-badge text-xs">
          ✨ Gemini
        </span>
      </div>

      {/* ── Result Sections ─────────────────────────── */}
      {SECTIONS.map((section, index) => (
        <div
          key={section.key}
          // Staggered fade-in animation for each section
          className={`result-section ${section.borderClass} fade-in-up`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">{section.icon}</span>
            <div className="flex-1">
              <span className={`font-bold text-sm ${section.headerClass}`}>
                {section.title}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">{section.desc}</p>
            </div>
            {/* Color-coded badge */}
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${section.badgeClass}`}>
              AI
            </span>
          </div>

          {/* Section Content */}
          <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-mono
                          bg-black/20 rounded-lg p-3 border border-white/5">
            {result[section.key] || "Not available."}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultCard;
