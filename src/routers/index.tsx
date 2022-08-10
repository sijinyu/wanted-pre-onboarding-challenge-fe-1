import { Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import LayoutRoute from "./LayoutRoute";
import { Auth } from "@pages/auth";
import { Todo } from "@pages/todo";
import NotFount from "@pages/error/NotFound";

export default function Router() {
  const { List, Detail } = Todo;
  const { SignIn, SignUp } = Auth;
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<List />} />
          <Route path="/todos/:id" element={<Detail />} />
        </Route>
        <Route element={<LayoutRoute />}>
          <Route path="/auth/signIn" element={<SignIn />} />
          <Route path="/auth/signUp" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </>
  );
}
