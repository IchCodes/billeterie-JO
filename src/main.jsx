import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import { CartProvider } from "react-use-cart";

import routes from "~react-pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>
);
