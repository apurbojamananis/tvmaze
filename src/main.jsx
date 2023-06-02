import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AllShow from "./components/Pages/AllShow/AllShow";
import ShowDetails from "./components/Pages/ShowDetails/ShowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <AllShow></AllShow>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/showDetails/:id",
        element: <ShowDetails></ShowDetails>,
        loader: ({ params }) =>
          fetch(`https://api.tvmaze.com/shows/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
