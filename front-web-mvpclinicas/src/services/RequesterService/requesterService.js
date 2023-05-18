import api from "../../services/api";

export const requisicaoDadosUsuario = (id) =>
  api.get(`/usuarios/${id}`);