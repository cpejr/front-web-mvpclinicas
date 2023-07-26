import * as requesterService from "../RequesterService/requesterService";

export const CadastroUsuario = async (usuario) => {
  const dados = await requesterService.criarUsuario(usuario).then((res) => {
    return res;
  });
  return dados;
};

export const GetDadosPessoais = async () => {
  let dadosUsuario = {};
  await requesterService
    .requisicaoDadosPessoais()
    .then((res) => {
      const emails = res.data.map((usuario) => usuario.email);
      dadosUsuario = emails;
    })
    .catch((error) => {
      alert(error.message);
    });
  return dadosUsuario;
};

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

export const CadastroNovoLocal = async (novoLocal) => {
  const dadosNovoLocal = await requesterService
    .criarNovoLocal(novoLocal)
    .then((res) => {
      return res;
    });
  return dadosNovoLocal;
};
