import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Login from "../views/login.js";
import Private from "../views/private.js";
import Singup from "../views/singup.js";

const innerRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Private />,
  },
  {
    path: "/singup",
    element: <Singup />,
  }
];

const fullRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: innerRoutes,
  },
];

const router = createBrowserRouter(fullRoutes);

export default router;