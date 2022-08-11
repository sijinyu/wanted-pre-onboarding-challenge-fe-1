import axios from "axios";
import { localStorage } from "../utils";

const baseURL = process.env.REACT_APP_API_URL;

const Api = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

Api.interceptors.request.use(
  async (config) => {
    const originalRequest = config;
    try {
      const token = await localStorage.getLocalStorage("token");
      if (token) {
        originalRequest!.headers!.Authorization = `Bearer ${token}`;
      }
    } catch (e: any) {
      console.log("API.interceptors.request.use", e);
    }
    return config;
  },
  async (error) => {
    return await error;
  }
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    try {
      const { response } = error;
      if (response?.status === 401) {
        alert("토큰이 만료되었습니다. 재 로그인 해주세요.");
        window.location.href = `/auth/signIn`;
        localStorage.removeLocalStorage("token");
      }
    } catch (e) {
      console.log("API.interceptors.response.use", e);
    }
    return await error;
  }
);

export { Api };
