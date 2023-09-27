import { useQuery } from "react-query";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000/",
});

const params = {
  cacheTime: 5000,
  staleTime: 10000,
  refetchOnWindowFocus: true,
  refetchInterval: 10000,
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
