import api from "./api";

export async function login(dados) {
  const { data } = await api.post(`/login/`, dados);

  return data;
}
//user
export async function cadastro(dados) {
  const { data } = await api.post(`/usuarios/`, dados);

  return data;
}
export async function updateDadosPerfil(dados) {
  console.log(dados.respostas);
  console.log(dados._id);
  const { data } = await api.put(`/usuarios/${dados._id}`, dados.respostas);
  return data;
}
export async function requisicaoFotoDePerfil(id) {
  const { data } = await api.get(`/usuariosimagem/${id}`);

  return data;
}
export async function requisicaoDadosUsuario(id) {
  const { data } = await api.get(`/usuarios/${id}`);
  return data;
}
export async function requisicaoDeletarUsuario(id) {
  const { data } = await api.delete(`/usuarios/${id}`);
  return data;
}

//place
export async function getComments(id) {
  const { data } = await api.get(`/comentarios/${id}`);

  return data;
}

export async function createPlace(requestData) {
  // const { data } = await api.post(`/locais/`, requestData);
  console.log(requestData);
  return {};
}
