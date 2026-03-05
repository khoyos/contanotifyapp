import { useState, useEffect } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { MdFactCheck } from "react-icons/md";
import { PiFadersBold } from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Detectar si está en móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { path: "/home", name: "Inicio", icon: <FaHome /> },
    { path: "/home/clientes", name: "Crear Cliente", icon: <BsPeopleFill /> },
    { path: "/home/crear-obligaciones", name: "Crear Obligaciones", icon: <TbReportMoney /> },
    { path: "/home/monitoreo-obligaciones", name: "Monitoreo Obligaciones", icon: <MdFactCheck /> },
    { path: "/home/configuracion-notificaciones", name: "Configuración", icon: <PiFadersBold /> },
  ];

  return (
    <>
      {/* Botón flotante hamburguesa solo en móvil */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-[#3b82f6] text-white p-2 rounded-md shadow-md hover:bg-[#3b82f6] transition"
        >
          <FaBars size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#1e1e58] text-white transition-all duration-300 z-40
        ${isMobile ? (isOpen ? "w-64" : "w-0") : isOpen ? "w-64" : "w-20"}
        overflow-hidden shadow-lg`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#1e1e58]">
          <h1 className="text-lg font-bold">
            {isOpen ? "Conta Notify" : "C"}
          </h1>
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-[#3b82f6] transition"
            >
              <FaBars />
            </button>
          )}
        </div>

        {/* Menú */}
        <nav className="flex flex-col gap-2 mt-6 px-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all 
                hover:bg-[#3b82f6] ${
                  isActive ? "bg-[#3b82f6] font-semibold" : "text-gray-300"
                }`
              }
              onClick={() => isMobile && setIsOpen(false)} // cerrar en móvil
            >
              <div className="text-xl w-6 h-6 flex items-center justify-center">
                {item.icon}
              </div>
              {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Espaciador dinámico (para contenido principal) */}
      <div
        className={`transition-all duration-300 ${
          isMobile ? "ml-0" : isOpen ? "ml-64" : "ml-20"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
