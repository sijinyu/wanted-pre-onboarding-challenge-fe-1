import axios from "axios";
import { Api } from "../../common/api";

const baseURL = process.env.REACT_APP_API_URL;
const todo = `${baseURL}/todos`;

// todo
export const getTodos = () => {
  return Api.get(`${todo}`);
};

// todoById
export const getTodoById = (id) => {
  return Api.get(`${todo}`, id);
};

export const createTodo = (data) => {
  return Api.post(`${todo}`, data);
};

export const updateTodo = ({ id, ...param }) => {
  return Api.put(`${todo}/${id}`, param);
};

export const deleteTodo = ({ id }) => {
  return Api.delete(`${todo}/${id}`);
};
