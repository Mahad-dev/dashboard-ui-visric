import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";

const sidebarWidth = "300px";
const mainStyle = {
  width: `calc(100% - ${sidebarWidth})`,
};
function DefaultLayout() {
  return (
    <div className="w-full h-screen flex">
      <SideBar width={sidebarWidth} />
      <div style={mainStyle} className="px-[20px] h-full overflow-auto">
        <Header />
        <main className="pt-[110px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
