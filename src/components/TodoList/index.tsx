import React, { useState, useCallback } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

import TodoItem from "../TodoItem";

interface TodoList {
  todos?: any;
  onCreate?: any;
  onUpdate?: any;
  onDelete?: any;
}
const TodoList = ({ todos, onCreate, onUpdate, onDelete }: TodoList) => {
  const [input, setInput] = useState({ title: "", content: "" });
  const { title, content } = input;
  const onChange = useCallback(
    (e: { target: { value: any; name: any } }) => {
      const { value, name } = e.target;

      setInput({
        ...input,
        [name]: value,
      });
    },
    [input]
  );
  console.log("--");
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
    </Box>
  );
};

export default React.memo(TodoList);
