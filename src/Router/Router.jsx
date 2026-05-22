import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";
import Library from "../Page/Library/Library";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Layout,

    children: [
      {
        index: true,
        loader: () => fetch("/book.json"),
        Component: Home,
      },

      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/library",
        loader: () => fetch("/book.json"),
        Component: Library,
      },
    ],
  },
]);
