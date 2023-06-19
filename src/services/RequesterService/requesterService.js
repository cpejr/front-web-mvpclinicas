import api from "../../services/api";

export const requisicaoDadosUsuario = (id) => api.get(`/usuarios/${id}`);

export const requisicaoDadosLocais = () => api.get(`/locais`);

export const requisicaoDadosLocal = (id_local) =>
  api.get(`/locais/${id_local}`);

export const requisicaoComentariosLocal = (id_local) =>
  api.get(`/comentarios/${id_local}`);

export const requisicaoDeletarUsuario = (id) => api.delete(`/usuarios/${id}`);

export const updateDadosPerfil = (id, respostas) => api.put(`/usuarios/${id}`, respostas);
