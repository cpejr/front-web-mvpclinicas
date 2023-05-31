import api from "../api";

export const criarUsuario = async (usuario) => {
    const resposta = await api.post("/usuarios", {
        ...usuario,
    });
   
    return resposta.data;
};