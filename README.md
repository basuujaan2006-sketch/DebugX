# DebugX 🐛⚡

> **AI-Powered Code Analysis & Debugging Platform**  
> Built with React + Vite + Tailwind CSS + Monaco Editor + Node.js + Express + Google Gemini API

---

## 📁 Project Structure

```
DebugX/
├── client/                   # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Glass navbar
│   │   │   ├── Hero.jsx           # Hero section
│   │   │   ├── CodeEditor.jsx     # Monaco editor wrapper
│   │   │   ├── LanguageSelector.jsx
│   │   │   ├── AnalyzeButton.jsx  # Glow CTA button
│   │   │   ├── ResultCard.jsx     # AI results panel
│   │   │   └── Loader.jsx         # Loading animation
│   │   ├── pages/
│   │   │   └── Home.jsx           # Main page + state management
│   │   ├── services/
│   │   │   └── api.js             # Axios API calls
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css              # Global styles + animations
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── server/                   # Backend (Node.js + Express)
    ├── routes/
    │   └── analyze.js             # POST /api/analyze route
    ├── controllers/
    │   └── analyzeController.js   # Request validation
    ├── services/
    │   └── geminiService.js       # Gemini AI integration
    ├── app.js                     # Express setup
    ├── server.js                  # Entry point
    ├── .env                       # API keys (never commit!)
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

---

### 1️⃣ Setup the Backend

```bash
cd DebugX/server
npm install
```

Edit `.env` and add your Gemini API key:
```
GEMINI_API_KEY=your_actual_api_key_here
PORT=5000
```

Start the server:
```bash
npm run dev       # Uses nodemon for auto-reload
# OR
node server.js    # Direct start
```

Server runs at: `http://localhost:5000`

---

### 2️⃣ Setup the Frontend

```bash
cd DebugX/client
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🌐 API Reference

### `POST /api/analyze`

**Request Body:**
```json
{
  "language": "python",
  "code": "def add(a, b):\n    return a + b"
}
```

**Supported Languages:** `c`, `cpp`, `java`, `python`, `javascript`

**Response:**
```json
{
  "bugs": "No bugs found in this simple function.",
  "explanation": "This defines a function that takes two arguments and returns their sum.",
  "suggestedFix": "Consider adding type hints: def add(a: int, b: int) -> int:",
  "timeComplexity": "O(1) — constant time, no loops or recursion.",
  "bestPractices": "1. Add type hints. 2. Add docstrings. 3. Handle edge cases."
}
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🐛 Bug Detection | Finds syntax errors, logical bugs, off-by-one errors |
| 💡 Explanation | Step-by-step plain English explanation of the code |
| 🔧 Suggested Fix | Corrected code or improvement suggestions |
| ⏱️ Time Complexity | Big O notation analysis |
| ✅ Best Practices | 3–5 actionable coding recommendations |

---

## 🎨 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS v3 |
| Code Editor | Monaco Editor (@monaco-editor/react) |
| HTTP Client | Axios |
| Backend | Node.js, Express.js |
| AI Engine | Google Gemini 1.5 Flash |

---

## 🔐 Security Notes

- Never commit your `.env` file
- Add `.env` to `.gitignore`
- The Gemini API key is only used server-side
