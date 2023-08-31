import axios from "axios";
import { recebeToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:8000",
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
