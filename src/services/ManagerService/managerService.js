import * as requesterService from "../RequesterService/requesterService";

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
      alert("Usuário deletado com sucesso");
      window.location.href = "/home";
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
      alert("Dados alterados com sucesso.");
      window.location.href = "/perfil";
    })
    .catch((error) => {
      alert(error.message);
      return false;
    });
};
