import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export const analyzeCode = async (language, code) => {
  const response = await api.post("/analyze", {
    language,
    code,
  });

  return response.data;
};

export default api;