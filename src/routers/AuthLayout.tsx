import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import Header from "@/components/Layout/Header";
import { useStorageCheck } from "@/hooks";

// localStorage.getLocalStorage('token')

// console.log(token, "--");
function AuthLayout() {
  const navigate = useNavigate();
  const { items } = useStorageCheck({ key: "token" });
  console.log(items, "--");
  // const redirect = (token) => {
  //   if (!token) {
  //     alert("토큰이 유효하지 않습니다. 로그인 해주세요.");
  //     navigate("/auth/signIn", { replace: true });
  //   }
  // };
  // useEffect(() => {
  //   redirect(token);
  // }, []);
  return (
    <>
      <Header token={items} />
      <Outlet />
    </>
  );
}
export default AuthLayout;
