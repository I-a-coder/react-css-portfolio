import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidenav from "../Sidenav/Sidenav";

function Layout() {
  return (
    <>
      <Header />
      <Sidenav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout; 