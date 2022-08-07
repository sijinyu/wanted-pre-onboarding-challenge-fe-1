import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import NotFount from "../pages/error/NotFound";
import { Todo } from "../pages/todo";
import AuthLayout from "./AuthLayout";
import LayoutRoute from "./LayoutRoute";

export default function Router() {
  const { List, Detail } = Todo;
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route element={<LayoutRoute />}>
          <Route path="/auth/signIn" element={<SignIn />} />
          <Route path="/auth/signUp" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </>
  );
  // logout Page
  // <Router exact path="/" render={SignIn} />
}
