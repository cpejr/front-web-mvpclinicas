import * as requesterService from "../RequesterService/requesterService";

export const GetDadosUsuario = async (id) => {
    let dadosUsuario = {};
  
    await requesterService
      .requisicaoDadosUsuario(id)
      .then((res) => {
        dadosUsuario = res.data;
      })
      .catch((error) => {
        alert(error.message)
      });

    return { dadosUsuario };
  };