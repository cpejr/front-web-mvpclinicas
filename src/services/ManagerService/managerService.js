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

export const requisicaoLogin = async (email, senha) => {
  try {
    const res = await requesterService.logarUsuario(email,senha);
    sessionStorage.setItem('@clinicas-Token', res.data.token);
    console.log(sessionStorage);
  } catch (error) {
  console.log(error);
  alert(error.message); 
  }

  return;
};