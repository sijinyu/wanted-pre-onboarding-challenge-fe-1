import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { useStorageCheck } from "@/hooks";

function AuthLayout() {
  const { items } = useStorageCheck({ key: "token" });
  return (
    <>
      <Header token={items} />
      <Outlet />
    </>
  );
}
export default AuthLayout;
