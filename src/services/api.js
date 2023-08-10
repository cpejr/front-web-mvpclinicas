import axios from "axios";

const api = axios.create({
  baseURL: "https://clinicas-4a2g.onrender.com",
});

export default api;
