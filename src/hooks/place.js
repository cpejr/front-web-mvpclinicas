import { useQuery } from "@tanstack/react-query";
import { getComments } from "../services/endpoints";

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
