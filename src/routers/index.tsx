import { Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import LayoutRoute from "./LayoutRoute";
import { Auth } from "@/pages/auth";
import { Todo } from "@/pages/todo";
import { Error } from "@/pages/error";

export default function Router() {
  const { List, Detail } = Todo;
  const { SignIn, SignUp } = Auth;
  const { NotFound } = Error;

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<List />}>
            <Route path="/:id" element={<Detail />} />
          </Route>
        </Route>
        <Route element={<LayoutRoute />}>
          <Route path="/auth/signIn" element={<SignIn />} />
          <Route path="/auth/signUp" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
