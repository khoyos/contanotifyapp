import { useState, useEffect } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { NavLink } from "react-router-dom";

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
    {
      path: "/home/crear-obligaciones",
      name: "Crear Obligaciones",
      icon: <TbReportMoney />,
    },
  ];

  return (
    <>
      {/* Botón flotante hamburguesa solo en móvil */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-md shadow-md hover:bg-green-700 transition"
        >
          <FaBars size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-slate-900 text-white transition-all duration-300 z-40
        ${isMobile ? (isOpen ? "w-64" : "w-0") : isOpen ? "w-64" : "w-20"}
        overflow-hidden shadow-lg`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-700">
          <h1 className="text-lg font-bold">
            {isOpen ? "Conta Notify" : "C"}
          </h1>
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-green-400 transition"
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
                hover:bg-green-700 ${
                  isActive ? "bg-green-700 font-semibold" : "text-gray-300"
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
