import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import TodoItem from "../TodoItem";

const TodoList = ({ todos, onCreate, onUpdate, onDelete }) => {
  const [input, setInput] = useState({ title: "", content: "" });
  const { title, content } = input;
  const onChange = (e) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
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
