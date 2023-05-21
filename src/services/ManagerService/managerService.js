import * as requesterService from "../RequesterService/requesterService";

export const GetDadosLocal = async (id_local) => {
  let dadosLocal = {};

  await requesterService
    .requisicaoDadosLocal(id_local)
    .then((res) => {
      dadosLocal = res.data;
    })
    .catch((error) => {
      alert(error.message);
    });

  return { dadosLocal };
};

export const GetComentariosLocal = async (id_local) => {
  let comentariosLocal = {};

  await requesterService
    .requisicaoComentariosLocal(id_local)
    .then((res) => {
      comentariosLocal = res.data;
    })
    .catch((error) => {
      alert(error.message);
    });

  return { comentariosLocal };
};
