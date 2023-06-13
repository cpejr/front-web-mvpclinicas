import * as requesterService from "../RequesterService/requesterService";
import { toast } from "react-toastify";

export const GetDadosUsuario = async (id) => {
    let dadosUsuario = {};
    await requesterService
      .requisicaoDadosUsuario(id)
      .then((res) => {
        dadosUsuario = res.data;
      })

    return { dadosUsuario };
  };
  export const GetDadosPessoais = async () => {
    let dadosUsuario = {};
    await requesterService
      .requisicaoDadosPessoais()
      .then((res) => {
        dadosUsuario = res.data;
      })
      .catch((error) => {
        alert(error.message);
      });
    return dadosUsuario;
  };

export const GetDadosLocais = async () => {
  let dadosLocais = {};
  await requesterService
    .requisicaoDadosLocais()
    .then((res) => {
      dadosLocais = res.data;
    })
    

  return { dadosLocais };
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