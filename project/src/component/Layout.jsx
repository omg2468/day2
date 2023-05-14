import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Subhere from "./Subhere";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    <Subhere/>
      <Footer />
    </div>
  );
}
