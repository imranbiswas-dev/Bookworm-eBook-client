import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Dashboard from '../Page/Dashboard/Dashboard';


export const router = createBrowserRouter([
  {
    path: "/",

    Component: Layout,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/dashboard",
        Component: Dashboard,
      },
    ],
  },
]);
