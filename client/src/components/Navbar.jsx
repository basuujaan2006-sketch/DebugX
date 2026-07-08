// ============================================================
// components/Navbar.jsx — Top Navigation Bar
// Glass-effect navbar with DebugX logo and nav links.
// ============================================================

function Navbar() {
  return (
    <nav className="navbar-glass sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ─────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Animated logo icon */}
            <div className="w-9 h-9 rounded-xl btn-glow flex items-center justify-center pulse-ring">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Bug icon */}
                <path d="M8 2l1.5 1.5" />
                <path d="M14.5 3.5L16 2" />
                <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
                <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z" />
                <path d="M12 20v-9" />
                <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
                <path d="M6 13H2" />
                <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
                <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
                <path d="M22 13h-4" />
                <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight gradient-text drop-shadow-sm">
              DebugX
            </span>
          </div>

          {/* ── Nav Links ────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#editor"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Editor
            </a>
            <a
              href="#about"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </a>
            {/* CTA Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 shadow-sm backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Powered by Gemini
            </span>
          </div>

          {/* ── Mobile Menu Hint ─────────────────────────── */}
          <div className="md:hidden">
            <span className="section-badge text-xs">Gemini AI</span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
