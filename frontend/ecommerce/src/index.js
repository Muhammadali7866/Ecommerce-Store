import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/home/Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProductDesciption from "./Components/product/ProductDesciption";
import Layout from "./Components/Layout";
const root = ReactDOM.createRoot(document.getElementById("root"));

// import ProductDesciption from "./Components/product/ProductDesciption";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path="/" element={<Navbar />}></Route>)
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/product",
        element: <ProductDesciption />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
