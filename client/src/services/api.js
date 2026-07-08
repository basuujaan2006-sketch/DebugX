import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

console.log("Using API URL:", API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export const analyzeCode = async (language, code) => {
  console.log("Sending request to:", `${API_URL}/analyze`);

  const response = await api.post("/analyze", {
    language,
    code,
  });

  return response.data;
};

export default api;