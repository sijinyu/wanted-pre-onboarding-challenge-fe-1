import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postSignIn } from "./crud";

export default function SignIn() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { mutate } = useMutation(postSignIn, {
    onSuccess: (response) => {
      const {
        data: { message, token },
      } = response;
      alert(message);
      localStorage.setItem("token", token);
      window.location.replace("/");
    },
    onError: (error) => {
      const {
        data: { details },
      } = error.response;
      setMessage(details);
    },
  });

  const handleSubmit = () => {
    const { email, password } = input;
    const params = {
      email,
      password,
    };

    mutate(params);
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const emailValidate = (email) => {
    return email.includes("@") && email.includes(".");
  };
  const passwordValidate = (password) => {
    return password.length >= 8;
  };

  useEffect(() => {
    setDisabled(
      !(emailValidate(input.email) && passwordValidate(input.password))
    );
  }, [input]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일을 입력하세요."
            name="email"
            onChange={onChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호를 입력하세요."
            type="password"
            id="password"
            onChange={onChange}
            autoComplete="current-password"
          />
          <Button
            disabled={disabled}
            type="submit"
            fullWidth
            onClick={handleSubmit}
            color="primary"
            variant="contained"
          >
            로그인
          </Button>
        </Box>
        <Typography variant="span">{message}</Typography>
        <Stack width={"100%"} sx={{ mt: 1 }} alignItems="flex-end">
          <Button
            type="text"
            variant="text"
            onClick={() => navigate("/auth/signUp")}
          >
            회원가입
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
