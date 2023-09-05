import axios from "axios";
import { recebeToken } from "./auth";

const api = axios.create({
  baseURL: "https://clinicas-4a2g.onrender.com",
});

api.interceptors.request.use(
  (req) => {
    const token = recebeToken();

    if (!req.headers.Authorization && token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },

  (error) => {
    return error;
  }
);
export default api;
