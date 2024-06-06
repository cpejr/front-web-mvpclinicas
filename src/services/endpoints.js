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
