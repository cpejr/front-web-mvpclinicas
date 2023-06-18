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
            clearAuth: () => set({ token: null, usuario: null }),
        }),
        {
            name: "auth", //nome do ítem na storage do navegador. A chave auth vai ter os dados do token e do usuario num objeto (tem que ser único)
        }
    )
);

export default useAuthStore;