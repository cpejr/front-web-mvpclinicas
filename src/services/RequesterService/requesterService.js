import api from "../../services/api";

export const requisicaoDadosUsuario = (id) =>
  api.get(`/usuarios/${id}`);

export const requisicaoDadosLocais = () =>
  api.get(`/locais`);

export const criarComentario = async (body, id_local) => {
  await api.post(`/comentarios/${id_local}`, {
    ...body,
  });
}

export const requisicaoDadosLocal = (id_local) =>
  api.get(`/locais/${id_local}`);

export const requisicaoComentariosLocal = (id_local) =>
  api.get(`/comentarios/${id_local}`);

export const deletarLocal = (id_local) =>
  api.delete(`/locais/${id_local}`);
