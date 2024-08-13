import axios from "axios";
import { recebeToken } from "./auth";
import useAuthStore from "../stores/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use(
  (req) => {
    const { token } = useAuthStore.getState();

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
