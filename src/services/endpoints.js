import api from "./api";

export async function login(dadosLogin) {
  const { data } = await api.post(`/login/`, dadosLogin);

  return data;
}
