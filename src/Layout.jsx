import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./components/Header/Headers";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Toaster />
    </>
  );
};

export default Layout;
