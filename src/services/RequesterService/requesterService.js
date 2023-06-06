import api from "../../services/api";

export const requisicaoDadosUsuario = (id) =>
  api.get(`/usuarios/${id}`);

export const logarUsuario = (email, senha) =>
  api.post("/login", {
    email,
    senha,
  });


export const requisicaoDadosLocais = () =>
  api.get(`/locais`);