import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ token }) => {
  const navigate = useNavigate();
  const authLabel = (token) => {
    return token ? "로그아웃" : "로그인";
  };
  const authButton = (token) => {
    return token ? logOut() : login();
  };
  const logOut = () => {
    localStorage.removeItem("token", null);
    alert("로그아웃이 완료 되었습니다.");
    window.location.replace("/auth/signIn");
  };
  const login = () => {
    navigate("/auth/signIn");
  };
  return (
    <Box component="header" textAlign="right">
      <Button
        type="button"
        onClick={() => authButton(token)}
        variant="text"
        disableRipple
      >
        {authLabel(token)}
      </Button>
    </Box>
  );
};

export default React.memo(Header);
