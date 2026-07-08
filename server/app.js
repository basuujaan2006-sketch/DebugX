const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://your-vercel-app.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

app.use("/api/analyze", analyzeRoute);

app.get("/", (req, res) => {
  res.json({ message: "DebugX API is running 🚀" });
});

module.exports = app;