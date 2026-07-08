// ============================================================
// App.jsx — Root Application Component
// Sets up the background and renders the main Home page.
// ============================================================

import Home from "./pages/Home";

function App() {
  return (
    // Full-screen container with animated gradient background
    <div className="min-h-screen bg-animated-gradient font-inter relative overflow-hidden">
      {/* ── Floating Gradient Orbs (decorative background blobs) ── */}
      <div className="orb orb-purple" aria-hidden="true" />
      <div className="orb orb-blue"   aria-hidden="true" />
      <div className="orb orb-pink"   aria-hidden="true" />

      {/* ── Main Content (sits above orbs via z-index) ── */}
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;
