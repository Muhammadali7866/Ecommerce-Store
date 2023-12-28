import React from "react";
import Navbar from "./home/Navbar";
import NewsLetter from "./home/NewsLetter";
import { Outlet } from "react-router-dom";
import Footer from "./home/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Layout;
