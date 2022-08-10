import React, { useState } from "react";
import Container from "@mui/material/Container";
import TodoList from "../../components/TodoList";
import { useMutation, useQuery } from "react-query";
import SplashScreen from "../../components/Layout/SplashScreen";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./crud";
import { useNavigate } from "react-router-dom";

export default function List() {
  const navigate = useNavigate();

  const [refetch, setRefetch] = useState(false);

  const { isError, isLoading, isSuccess, data } = useQuery(
    ["todoList", refetch],
    () => getTodos()
  );

  const createApi = useMutation(createTodo, {
    onSuccess: (response: any) => {
      if (response?.response!.data?.details) {
        alert(response.response!.data.details);
      }
      setRefetch(!refetch);
    },
    onError: (err) => console.log(err),
  });

  const updateApi = useMutation(updateTodo, {
    onSuccess: (response: any) => {
      if (response?.response?.data?.details) {
        alert(response.response.data.details);
      }
      console.log(response, "--");
      setRefetch(!refetch);
    },
    onError: (err) => console.log(err),
  });

  const deleteApi = useMutation(deleteTodo, {
    onSuccess: (response: any) => {
      if (response?.response?.data?.details) {
        alert(response.response.data.details);
      }
      setRefetch(!refetch);
    },
    onError: (err) => console.log(err),
  });
  const onCreate = ({ title, content }: any) => {
    const params = {
      title,
      content,
    };
    createApi.mutate(params);
  };
  const onUpdate = ({ id, title, content }: any) => {
    console.log(id, title, content);
    const params = {
      id,
      title,
      content,
    };
    updateApi.mutate(params);
  };

  const onDelete = ({ id }: any) => {
    const params = {
      id,
    };
    deleteApi.mutate(params);
  };

  const moveDetail = () => {
    navigate("/");
  };

  const list = data?.data?.data;
  return (
    <Container component="main" maxWidth="xs">
      {isError && <p>투드리스트를 불러오는데 실패했습니다.</p>}
      {isLoading && <SplashScreen />}
      {isSuccess && (
        <TodoList
          todos={list?.reverse()}
          onCreate={onCreate}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
    </Container>
  );
}
