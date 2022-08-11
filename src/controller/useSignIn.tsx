import { useEffect, useState } from "react";
import authRepository, { AuthResponse } from "@/repository/auth";
import { IUserState } from "@/pages/auth/types";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { localStorage, auth } from "@/common/utils";
import { AxiosError } from "axios";

const { emailValidate, passwordValidate } = auth;

export const useSignIn = ({ email, password }: IUserState) => {
  const [isValidate, setIsValidate] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsValidate(emailValidate(email) && passwordValidate(password));
  }, [email, password]);

  return {
    signIn: useMutation<AuthResponse, Error, IUserState>(
      authRepository.signIn,
      {
        onSuccess: (response: AuthResponse) => {
          const {
            data: { token },
          } = response;
          localStorage.setLocalStorage("token", token);
          navigate("/", { replace: true });
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            setMessage(error.response?.data.details || error.message);
          }
        },
      }
    ),
    message,
    isValidate,
  };
};
