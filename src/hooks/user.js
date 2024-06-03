import { useMutation } from "@tanstack/react-query";
import { login, cadastro } from "../services/endpoints";

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

// export function useGetUsers({
//   onSuccess = () => {},
//   onError = (err) => console.error(err),
// } = {}) {
//   return useQuery({
//     queryKey: ["users"],
//     queryFn: () => getUsers(),
//     onSuccess,
//     onError,
//   });
// }
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
