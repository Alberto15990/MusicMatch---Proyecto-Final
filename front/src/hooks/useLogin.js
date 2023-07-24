import { useMutation, useQueryClient } from "react-query";
import { auth } from "../services";
import { useLocation } from "wouter";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const [, setLocation] = useLocation();

  const { mutate: register } = useMutation({
    mutationFn: auth.register,
    onSuccess: (result) => {
      if (result.success) {
        setLocation("/login");
      }
    },
  });

  const { mutate: login } = useMutation({
    mutationFn: auth.login,
    onSuccess: (response) => {
      if (response.success)
        queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { register, login };
};
