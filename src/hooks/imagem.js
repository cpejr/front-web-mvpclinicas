import { useQuery } from "@tanstack/react-query";
import { requisicaoFotoDePerfil } from "../services/endpoints";

export function useRequisicaoFotoDePerfil(
  id,
  { onSuccess = () => {}, onError = (err) => console.error(err) } = {}
) {
  return useQuery({
    queryKey: ["perfil"],
    queryFn: () => requisicaoFotoDePerfil(id),
    onSuccess,
    onError,
  });
}
