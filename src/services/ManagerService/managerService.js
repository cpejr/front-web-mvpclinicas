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

export const GetDadosLocais = async () => {
  let dadosLocais = {};
  await requesterService
    .requisicaoDadosLocais()
    .then((res) => {
      dadosLocais = res.data;
    })
    

  return { dadosLocais };
};

export const GetDadosLocalPorId = async (id_local) => {
  let dadosLocais = {};
  await requesterService
    .requisicaoDadosLocal(id_local)
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

export const UpdateFotoDePerfil = async (id, file) => {
  await requesterService
    .updateFotoDePerfil(id, file)
    .then(() => {
      toast.success('Foto atualizada com sucesso');
    })
    .catch((error) => {
      alert(error.message);
      return;
    });
  return;
};
