import * as requesterService from "../RequesterService/requesterService";
import { toast } from "react-toastify";
import requisicaoErro from '../../utils/HttpErros';

export const CadastroUsuario = async (usuario) => {
  const dados = await requesterService.criarUsuario(usuario).then((res) => {
    return res;
  });
  return dados;
};
export const GetDadosUsuario = async (id) => {
  let dadosUsuario = {};
  await requesterService.requisicaoDadosUsuario(id).then((res) => {
    dadosUsuario = res.data;
  });

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
  return { dadosUsuario };
};

export const GetDadosLocais = async () => {
  let dadosLocais = {};
  await requesterService.requisicaoDadosLocais().then((res) => {
    dadosLocais = res.data;
  });

  return { dadosLocais };
};

export const CriarNovoComentario = async (body, id_local) => {
  const resposta = await requesterService
    .criarComentario(body, id_local)
    .then((res) => {
      return res;
    });

  return resposta;
};

export const GetDadosLocalPorId = async (id_local) => {
  let dadosLocais = {};
  await requesterService.requisicaoDadosLocal(id_local).then((res) => {
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
export const UpdateFotoDePerfil = async (id, file) => {
  await requesterService
    .updateFotoDePerfil(id, file)
    .catch((error) => {
      requisicaoErro(error);
      return;
    });
  return;
};

export const CadastroNovoLocal = async (novoLocal) => {
  const dadosNovoLocal = await requesterService
    .criarNovoLocal(novoLocal)
    .then((res) => {
      return res;
    });
  return dadosNovoLocal;
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

export const requisicaoLogin = async (email, senha) => {
  try {
    const res = await requesterService.logarUsuario(email, senha);
    sessionStorage.setItem("@clinicas-Token", res.data.token);
    window.location.href = "/home";
    return res;
  } catch (error) {
    toast.error(error.response.data.message);
  }

  return;
};

export const GetFotoDePerfil = async (id) => {
  let fotoDePerfil = {};
  await requesterService
    .requisicaoFotoDePerfil(id)
    .then((res) => (fotoDePerfil = res.data.imagem))
    .catch((error) => alert(error.message));

  return fotoDePerfil;
};
