import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
const Layout = ({ children, showNavAndSidebar }) => {
  return (
    <div
      id="pcoded"
      className="pcoded iscollapsed"
      theme-layout="vertical"
      vertical-placement="left"
      vertical-layout="wide"
      pcoded-device-type="desktop"
      vertical-nav-type="expanded"
      vertical-effect="shrink"
      vnavigation-view="view1"
      nav-type="st2"
      fream-type="theme1"
      layout-type="light"
    >
      {showNavAndSidebar ? (
        <div className="pcoded-container navbar-wrapper">
          <Navbar />
          <div className="d-flex" style={{ paddingTop: "56px" }}>
            <Sidebar />
            <div className="w-100 pcoded-content">{children}</div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Layout;
