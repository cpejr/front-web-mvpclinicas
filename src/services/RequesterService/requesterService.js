import api from "../api";

export const requisicaoDadosLocal = (id_local) =>
  api.get(`/locais/${id_local}`);

  export const requisicaoComentariosLocal = (id_local) =>
  api.get(`/comentarios/${id_local}`);