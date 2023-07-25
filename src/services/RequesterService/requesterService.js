import api from "../../services/api";

export const requisicaoDadosUsuario = (id) => api.get(`/usuarios/${id}`);

export const requisicaoDadosLocais = () => api.get(`/locais`);

export const requisicaoDadosLocal = (id_local) =>
  api.get(`/locais/${id_local}`);

export const requisicaoComentariosLocal = (id_local) =>
  api.get(`/comentarios/${id_local}`);

export const updateFotoDePerfil = (id, base64) =>
  api.put(`/usuariosimagem/${id}`, {
    file: base64,
  });

export const requisicaoFotoDePerfil = (id) => api.get(`/usuariosimagem/${id}`);
