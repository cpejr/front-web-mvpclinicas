import { useMutation, useQuery } from "@tanstack/react-query";
import { login, cadastro, requisicaoDadosUsuario } from "../services/endpoints";

export function useLogin({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  });
}

export function useCadastro({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: cadastro,
    onSuccess,
    onError,
  });
}

export function useGetDadosUsuario(
  id,
  { onSuccess = () => {}, onError = (err) => console.error(err) } = {}
) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => requisicaoDadosUsuario(id),
    onSuccess,
    onError,
  });
}

// export function useDeleteUsers({
//   onSuccess = () => {},
//   onError = (err) => console.error(err),
// } = {}) {
//   return useMutation({
//     mutationFn: deleteUser,
//     onSuccess,
//     onError,
//   });
// }
