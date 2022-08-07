import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";

const TodoDetail = () => {
  const { state } = useLocation();
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        제목
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {state.title}
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        내용
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {state.content}
      </Typography>
    </Container>
  );
};

export default TodoDetail;
