import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./page/Home.jsx";
import Video from "./page/Video.jsx";
import Layout from "./component/Layout.jsx";
import ProductDetails from "./page/ProductDetails.jsx";
import Product from "./page/Product.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/video", element: <Video /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:productId", element: <ProductDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
