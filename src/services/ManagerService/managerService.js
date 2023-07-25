import * as requesterService from "../RequesterService/requesterService";
import { toast } from "react-toastify";
export const GetDadosUsuario = async (id) => {
  let dadosUsuario = {};
  await requesterService.requisicaoDadosUsuario(id).then((res) => {
    dadosUsuario = res.data;
    
  });

  return { dadosUsuario };
};

export const GetDadosLocais = async () => {
  let dadosLocais = {};
  await requesterService.requisicaoDadosLocais().then((res) => {
    dadosLocais = res.data;
  });

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

export const ExcluirPerfil = async (id) => {
  await requesterService
    .requisicaoDeletarUsuario(id)
    .then(() => {
      setTimeout(() => {
        window.location.href = "/home";
      }, 3000);
    })
    .catch((error) => {
      alert(error.message);
      return false;
    });
};

export const UpdateDadosPerfil = async (id, respostas) => {
  await requesterService
    .updateDadosPerfil(id, respostas)
    .then(() => {
      setTimeout(() => {
        window.location.href = "/perfil";
      }, 3000);
    })
    .catch((error) => {
      alert(error.message);
      return false;
    });
};
export const UpdateSenha = async (id, respostas) => {
  try {
    await requesterService.updateSenha(id, respostas);
    setTimeout(() => {
      window.location.href = "/perfil";
    }, 3000);
    return true;
  } catch (error) {
    return false;
  }
};
export const requisicaoLogin = async (email, senha) => {
  try {
    const res = await requesterService.logarUsuario(email, senha);
    sessionStorage.setItem("@clinicas-Token", res.data.token);
    return res;
    //window.location.href = "/home";
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }

  return;
};

export const CadastroNovoLocal = async (novoLocal) => {
  const dadosNovoLocal = await requesterService
  .criarNovoLocal(novoLocal)
  .then((res) => {
      return res;
     
  });
  return dadosNovoLocal;
}