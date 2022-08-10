import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const user = `${baseURL}/users`;

// signUp
export const postSignUp = (data: any) => {
  return axios.post(`${user}/create`, data);
};

// signIn
export const postSignIn = (data: any) => {
  return axios.post(`${user}/login`, data);
};
