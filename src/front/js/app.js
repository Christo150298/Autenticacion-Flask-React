import React from "react";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./store/Context";
import router from "./routes/routes";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
//   const basename = process.env.BASENAME || "";

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};

export default Layout;