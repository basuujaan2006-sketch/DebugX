// ============================================================
// components/OutputCard.jsx — Output Prediction Panel
// Renders the predicted standard output of the code.
// ============================================================

function OutputCard({ output }) {
  if (!output) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* ── Panel Header ────────────────────────────── */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>🖥️</span>
          <span>Predicted Output</span>
        </h2>
        <span className="section-badge text-xs bg-pink-500/10 border-pink-500/30 text-pink-400">
          ✨ Execution
        </span>
      </div>

      {/* ── Output Container ────────────────────────── */}
      <div className="result-section hover:border-pink-500/30 fade-in-up">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-3 px-1 pb-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-500 font-mono ml-2">Console Output</span>
        </div>

        {/* Terminal Content */}
        <div className="text-green-400 text-sm leading-relaxed whitespace-pre-wrap font-mono
                        bg-black/40 rounded-lg p-4 border border-white/5 shadow-inner min-h-[60px]">
          {output === "Not available." ? "No output." : output}
        </div>
      </div>
    </div>
  );
}

export default OutputCard;
