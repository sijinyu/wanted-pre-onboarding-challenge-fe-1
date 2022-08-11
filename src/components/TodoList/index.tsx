import React, { useState, useCallback, ReactNode } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

import TodoItem from "../TodoItem";
import { useInputMultiple } from "@/hooks";
import { Outlet } from "react-router-dom";

interface TodoList {
  todos?: any;
  onCreate?: any;
  onUpdate?: any;
  onDelete?: any;
  children?: React.ReactNode;
}
const TodoList = ({
  todos,
  onCreate,
  onUpdate,
  onDelete,
  children,
}: TodoList) => {
  const [{ title, content }, onChange] = useInputMultiple({
    title: "",
    content: "",
  });
  return (
    <Box>
      <Typography variant="h2" textAlign="center" mt={10}>
        TodoList
      </Typography>

      <Stack spacing={2} mb={3}>
        <TextField
          fullWidth
          label="제목"
          name="title"
          onChange={onChange}
        ></TextField>
        <TextField
          fullWidth
          label="내용"
          name="content"
          onChange={onChange}
        ></TextField>
        <Button
          variant="contained"
          onClick={() => onCreate({ title, content })}
        >
          추가
        </Button>
      </Stack>
      <Grid container>
        <Grid item xs={12}>
          {Array.isArray(todos) &&
            todos?.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  item={todo}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
            })}
        </Grid>
      </Grid>
      <Outlet />
    </Box>
  );
};

export default React.memo(TodoList);
