import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const user = `${baseURL}/users`;

// signUp
export const postSignUp = (data) => {
  return axios.post(`${user}/create`, data);
};

// signIn
export const postSignIn = (data) => {
  return axios.post(`${user}/login`, data);
};
