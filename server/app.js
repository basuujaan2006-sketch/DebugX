const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://debug-x-nu.vercel.app",
  "https://debug-fru90j1ff-basuujaan2006-sketchs-projects.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

app.options("*", cors());

app.use(express.json());

app.use("/api/analyze", analyzeRoute);

app.get("/", (req, res) => {
  res.json({ message: "DebugX API is running 🚀" });
});

module.exports = app;