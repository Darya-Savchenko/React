import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { PostsPage } from "./pages/PostsPage";
import { TodoPage } from "./pages/TodoPage";
import { UsersPage } from "./pages/UsersPage";
import { routes } from "./const/routes.js";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.main} element={<Layout />}>
          <Route path={routes.main} element={<MainPage />}>
            Home
          </Route>
          <Route path={routes.posts} element={<PostsPage />}>
            Posts
          </Route>
          <Route path={routes.todo} element={<TodoPage />}>
            To do
          </Route>
          <Route path={routes.users} element={<UsersPage />}>
            Users
          </Route>
          <Route
            path={`${routes.users}${routes.userPage}`}
            element={<UserPage />}
          ></Route>
          <Route path={routes.undefined} element={<MainPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
