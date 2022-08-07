import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";

const token = localStorage.getItem("token");
function AuthLayout() {
  const navigate = useNavigate();
  const redirect = (token) => {
    if (!token) {
      alert("토큰이 유효하지 않습니다. 로그인 해주세요.");
      navigate("/auth/signIn", { replace: true });
    }
  };
  useEffect(() => {
    redirect(token);
  }, []);
  return (
    <>
      <Header token={token} />
      <Outlet />
    </>
  );
}
export default AuthLayout;
