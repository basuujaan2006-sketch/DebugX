// ============================================================
// main.jsx — React Application Root
// Mounts the App component into the DOM and loads global CSS.
// ============================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Find the root div in index.html and mount our React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
