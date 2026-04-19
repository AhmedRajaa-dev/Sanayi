import axios from "axios";

const api = axios.create({
  baseURL: "https://sanayi-api.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
