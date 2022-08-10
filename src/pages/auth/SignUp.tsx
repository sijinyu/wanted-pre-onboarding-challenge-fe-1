import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMutation } from "react-query";
import { postSignUp } from "./crud";
import SplashScreen from "../../components/Layout/SplashScreen";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);

  const { mutate, isLoading } = useMutation(postSignUp, {
    onSuccess: (response) => {
      const {
        data: { message },
      } = response;

      alert(message);
      navigate("/auth/signIn", { replace: true });
    },
    onError: (error: any) => {
      const {
        data: { details },
      } = error.response;

      setMessage(details);
      // alert(error.response.data.details);
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

  const onChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const emailValidate = (email: string | string[]) => {
    return email.includes("@") && email.includes(".");
  };
  const passwordValidate = (password: string | any[]) => {
    return password.length >= 8;
  };

  useEffect(() => {
    setDisabled(
      !(emailValidate(input.email) && passwordValidate(input.password))
    );
  }, [input]);

  if (isLoading) return <SplashScreen />;

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
          회원가입
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="이메일을 형식에 맞춰 입력 해주세요."
                name="email"
                onChange={onChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="패스워드를 입력 해주세요. (8자 이상)"
                type="password"
                id="password"
                onChange={onChange}
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={disabled}
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            회원 가입
          </Button>
          <Typography>{message}</Typography>
        </Box>
      </Box>
    </Container>
  );
}
