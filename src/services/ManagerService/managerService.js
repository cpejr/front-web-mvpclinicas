import * as requesterService from "../RequesterService/requesterService";

export const GetDadosUsuario = async (id) => {
    let dadosUsuario = {};
  
    await requesterService
      .requisicaoDadosUsuario(id)
      .then((res) => {
        dadosUsuario = res.data;
      })

    return { dadosUsuario };
  };

export const GetDadosLocais = async () => {
  let dadosLocais = {};

  await requesterService
    .requisicaoDadosLocais()
    .then((res) => {
      dadosLocais = res.data;
      console.log(JSON.stringify(res))
    })
    

  return { dadosLocais };
};

export const CadastroNovoLocal = async (novoLocal) => {
  const dadosNovoLocal = await requesterService
  .criarNovoLocal(novoLocal)
  .then((res) => {
      return res;
     
  });
  return dadosNovoLocal;
}