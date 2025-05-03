import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../layout/Home";
import CategoriNews from "../components/Categories/CategoriNews";

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
        path: "category/:id",
        Component: CategoriNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);
