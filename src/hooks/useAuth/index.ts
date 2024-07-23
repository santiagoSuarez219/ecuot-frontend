import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "../../api/AuthAPI";
import { useEcuot } from "../../ecuot.ts";

export const useAuth = () => {
  const setUser = useEcuot((state) => state.setUser);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    setUser(undefined);
    return { data: undefined, isError: true, isLoading: false };
  }
  setUser(data);
  return { data, isError, isLoading };
};
