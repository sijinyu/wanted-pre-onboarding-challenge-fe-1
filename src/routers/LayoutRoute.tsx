import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";

const token = localStorage.getItem("token");
function LayoutRoute() {
  return (
    <>
      <Header token={token} />
      <Outlet />
    </>
  );
}
export default LayoutRoute;
