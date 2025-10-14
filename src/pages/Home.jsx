import React from "react";
import Sidebar from "../components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Navbar/>

        {/*<div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Bienvenido, {user.profile} {user?.name}
          </h1>
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-500 text-white rounded hover:opacity-90 mb-6"
          >
            Cerrar sesión
          </button>
        </div>*/}
        <div>
          {/* Aquí React Router inyectará la página seleccionada */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
