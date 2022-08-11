import { IUserState } from "@/pages/auth/types";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const users = `users`;

export interface AuthResponse {
  data: {
    message: string;
    token: string;
  };
}

const authRepository = {
  signIn: ({ email, password }: IUserState): Promise<AuthResponse> => {
    return axios.post(`${baseURL}/${users}/login`, { email, password });
  },
  signUp: ({ email, password }: IUserState): Promise<AuthResponse> => {
    return axios.post(`${baseURL}/${users}/create`, { email, password });
  },
};

export default authRepository;
