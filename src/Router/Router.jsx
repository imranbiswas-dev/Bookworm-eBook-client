import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";
import Library from "../Page/Library/Library";
import DetailsBook from "../Page/Library/DetailsBook";
import SignUp from "../Page/Authentication/SignUp";
import Login from "../Page/Authentication/Login";

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
      {
        path: "/detailsBook/:id",
        loader: async ({ params }) => {
          const res = await fetch("/book.json");
          const data = await res.json();
          return data.find((book) => book.id == params.id); // single book return করবে
        },
        Component: DetailsBook,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
