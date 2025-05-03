import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../layout/Home";
import CategoriNews from "../components/Categories/CategoriNews";
import AuthLayout from "../Auth/AuthLayout";
import Login from "../Auth/Login";
import Registation from "../Auth/Registation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoriNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Registation,
      },
    ],
  },
]);
