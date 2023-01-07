import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.scss";
type Props = {
  children: React.ReactNode;
};
const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="layout-container">
        <Sidebar />
        <div className="layout_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
