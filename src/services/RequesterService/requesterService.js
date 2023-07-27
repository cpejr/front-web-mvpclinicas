import api from "../../services/api";

export const requisicaoDadosUsuario = (id) => api.get(`/usuarios/${id}`);

export const logarUsuario = (email, senha) =>
  api.post("/login", {
    email,
    senha,
  });

export const requisicaoDadosPessoais = () => api.get(`/usuarios/`);
export const requisicaoDadosLocais = () => api.get(`/locais`);

export const criarComentario = async (body, id_local) => {
  await api.post(`/comentarios/${id_local}`, {
    ...body,
  });
};
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

export const requisicaoDeletarUsuario = (id) => api.delete(`/usuarios/${id}`);

export const updateDadosPerfil = (id, respostas) =>
  api.put(`/usuarios/${id}`, respostas);

export const criarUsuario = async (usuario) => {
  const resposta = await api.post("/usuarios", {
    ...usuario,
  });

  return resposta.data;
};


export const updateFotoDePerfil = (id, base64) =>
  api.put(`/usuariosimagem/${id}`, {
    file: base64,
  });

export const requisicaoFotoDePerfil = (id) => api.get(`/usuariosimagem/${id}`);
