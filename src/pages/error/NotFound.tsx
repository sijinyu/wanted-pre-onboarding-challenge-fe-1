import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

export default function NotFount() {
  return (
    <Container component="main" maxWidth="xs">
      <Box mt={10}>
        <Typography variant="h3">페이지 찾을 수 없음</Typography>
      </Box>
      <Button variant="contained" type="button" href="/" disableTouchRipple>
        메인으로 가기
      </Button>
    </Container>
  );
}
