import * as requesterService from "../RequesterService/requesterService";
import { toast } from "react-toastify";
import AddToast from "../../components/AddToast/AddToast";

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
  console.log("teste")
  toast.success("wow")
  await requesterService
    .requisicaoDadosLocais()
    .then((res) => {
      dadosLocais = res.data;
    })
    

  return { dadosLocais };
};
