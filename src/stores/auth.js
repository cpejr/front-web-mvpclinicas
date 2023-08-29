import { create } from "zustand";
import { persist } from "zustand/middleware";
import jwtDecode from "jwt-decode";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      usuario: null,
      setToken: (token) => {
        const { usuario } = jwtDecode(token);
        set({ token, usuario });
      },
      setUsuario: (usuario) => set({ usuario }),
      logout: () => {
        set({ token: null, usuario: null });
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
