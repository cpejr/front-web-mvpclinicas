import api from "../../services/api";

export const requisicaoDadosUsuario = (id) => api.get(`/usuarios/${id}`);

export const requisicaoDadosLocais = () => api.get(`/locais`);

export const criarNovoLocal = async (novoLocal) => {
  const resposta = await api.post("/locais", {
    ...novoLocal,
  });

  return resposta.data;
};

export const requisicaoDadosLocal = (id_local) =>
  api.get(`/locais/${id_local}`);

export const requisicaoComentariosLocal = (id_local) =>
  api.get(`/comentarios/${id_local}`);

export const criarUsuario = async (usuario) => {
  const resposta = await api.post("/usuarios", {
    ...usuario,
  });

  return resposta.data;
};

export const requisicaoDadosPessoais = () => api.get(`/usuarios/`);
