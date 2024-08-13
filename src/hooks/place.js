import { useMutation, useQuery } from "@tanstack/react-query";
import { createPlace, getComments } from "../services/endpoints";

export function useGetComments(
  id,
  { onSuccess = () => {}, onError = (err) => console.error(err) } = {}
) {
  return useQuery({
    queryKey: ["comments"],
    queryFn: () => getComments(id),
    onSuccess,
    onError,
  });
}

export function useCreatePlace({ onSuccess, onError }) {
  return useMutation({
    mutationFn: createPlace,
    onSuccess,
    onError,
  });
}
