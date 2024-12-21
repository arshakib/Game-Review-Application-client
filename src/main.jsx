import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Add from "./Component/Add Review/Add";
import Details from "./Component/Review Details/Details";
import Reviews from "./Component/All Reviews/Reviews";
import MyRev from "./Component/My  Reviews/MyRev";
import Update from "./Component/Update/Update";
import Watchlist from "./Component/Watchlist/Watchlist";
import Context from "./Context/Context";
import Private from "./Component/Private/Private";
import Error from "./Component/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://server-ochre-xi.vercel.app/users"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-ochre-xi.vercel.app/limitreviews"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <Private>
            <Add></Add>
          </Private>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://server-ochre-xi.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: () => fetch("https://server-ochre-xi.vercel.app/reviews"),
      },
      {
        path: "/my",
        element: (
          <Private>
            <MyRev></MyRev>
          </Private>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://server-ochre-xi.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/watchlist",
        element: (
          <Private>
            <Watchlist></Watchlist>
          </Private>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
