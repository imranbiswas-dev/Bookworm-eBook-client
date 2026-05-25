import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";
import Library from "../Page/Library/Library";
import DetailsBook from "../Page/Library/DetailsBook";
import SignUp from "../Page/Authentication/SignUp";
import Login from "../Page/Authentication/Login";
import AddBook from "../Page/BookSeller/AddBook";
import { API } from "../config/config";
import SearchResult from "../Components/SearchBox/SearchResult";
import UpdateBook from "../Page/BookSeller/UpdateBook";
import PrivateRouter from "./PrivateRouter";
import Contact from "../Page/Contact/Contact";
import About from "../Page/About/About";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Layout,

    children: [
      {
        index: true,
        loader: () => fetch(API.books),
        Component: Home,
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "/addBook",
        Component: AddBook,
      },
      {
        path: "/library",
        loader: () => fetch(API.books),
        Component: Library,
      },
      {
        path: "/detailsBook/:id",
        loader: async ({ params }) => {
          const res = await fetch(`${API.books}/id/${params.id}`);
          if (!res.ok) throw new Error("Book not found");
          return res.json();
        },
        element: (
          <PrivateRouter>
            <DetailsBook />
          </PrivateRouter>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) => fetch(`${API.books}/id/${params.id}`),
        Component: UpdateBook,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/search",
        Component: SearchResult,
      },

      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);
