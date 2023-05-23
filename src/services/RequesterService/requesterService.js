import api from "../../services/api";

export const requisicaoDadosUsuario = (id) =>
  api.get(`/usuarios/${id}`);

export const requisicaoDadosLocais = () =>
  api.get(`/locais`);