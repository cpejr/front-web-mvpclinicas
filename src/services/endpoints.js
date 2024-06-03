import api from "./api";

export async function login(dados) {
  const { data } = await api.post(`/login/`, dados);

  return data;
}

export async function cadastro(dados) {
  const { data } = await api.post(`/usuarios/`, dados);

  return data;
}
export async function requisicaoFotoDePerfil(id) {
  console.log(id);
  const data = api.get(`/usuariosimagem/${id}`);
  console.log(data);
  return data;
}
