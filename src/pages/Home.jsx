import React from "react";
import Sidebar from "../components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex w-full overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 p-5 box-border overflow-x-hidden">
        <Navbar/>
        <div>
          {/* Aquí React Router inyectará la página seleccionada */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
