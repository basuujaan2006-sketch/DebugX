// ============================================================
// components/LanguageSelector.jsx — Language Dropdown
// Lets the user choose which programming language their code is in.
// ============================================================

// Language options with display label and Monaco language ID
const LANGUAGES = [
  { value: "c",          label: "C",           icon: "🔵" },
  { value: "cpp",        label: "C++",          icon: "🟣" },
  { value: "java",       label: "Java",         icon: "☕" },
  { value: "python",     label: "Python",       icon: "🐍" },
  { value: "javascript", label: "JavaScript",   icon: "🟡" },
];

/**
 * LanguageSelector
 *
 * Props:
 *   value    {string}   - Currently selected language value
 *   onChange {Function} - Called with new value when user picks a language
 */
function LanguageSelector({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {/* ── Label ─────────────────────────────────────── */}
      <label
        htmlFor="language-select"
        className="text-sm font-semibold text-gray-300 flex items-center gap-2"
      >
        <span>⚙️</span>
        <span>Language</span>
      </label>

      {/* ── Select Wrapper ────────────────────────────── */}
      <div className="relative">
        <select
          id="language-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="lang-select pr-10"
          aria-label="Select programming language"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.icon}  {lang.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* ── Language Pills ────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mt-1">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.value}
            onClick={() => onChange(lang.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 shadow-sm
              ${
                value === lang.value
                  ? "bg-purple-500/20 border border-purple-400/50 text-purple-200 ring-2 ring-purple-500/20 ring-offset-1 ring-offset-transparent"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-gray-100 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
              }`}
            aria-pressed={value === lang.value}
          >
            <span className="mr-1.5">{lang.icon}</span> {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Export the languages array so other components can use it (e.g., for Monaco)
export { LANGUAGES };
export default LanguageSelector;
