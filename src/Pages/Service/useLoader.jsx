import { useQuery } from "react-query";
import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000/",
});

export const params = {
  cacheTime: 5000,
  staleTime: 10000,
  refetchOnWindowFocus: true,
  refetchInterval: 10000,
  keepPreviousData: true,
};

export function useServiceLoader() {
  return useQuery(
    "services",
    () => {
      return client.get("services");
    },
    params
  );
}
