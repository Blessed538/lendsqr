import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./layout.scss";
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Header />
      <div className="layout-container">
        <Sidebar />
        <div className="layout_content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
