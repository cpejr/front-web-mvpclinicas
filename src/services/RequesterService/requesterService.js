import api from "../api";

export const requisicaoDadosUsuario = (id) =>
  api.get(`/usuarios/${id}`);