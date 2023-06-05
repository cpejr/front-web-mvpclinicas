import api from "../../services/api";

export const requisicaoDadosUsuario = (id) =>
  api.get(`/usuarios/${id}`);

export const requisicaoDadosLocais = () =>
  api.get(`/locais`);

export const criarNovoLocal = async (novoLocal) => {
  const resposta = await api.post("/locais", {
    ...novoLocal,
  });

  return resposta.data;
};