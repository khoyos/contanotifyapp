import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars, FaArchive } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";



import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { path: "/home", name: "Inicio", icon: <FaHome /> },
    {
      path: "/home/clientes",
      name: "Crear Cliente",
      icon: <BsPeopleFill />,
    },
    {
      path: "/home/crear-obligaciones",
      name: "Crear Obligaciones",
      icon: <TbReportMoney />,
    },
    /*{
      path: "/home/tablenotify",
      name: "Tabla de Notificaciones",
      icon: <BsTable />,
    },
    {
      path: "/home/notifysettings",
      name: "Configuración de Notificaciones",
      icon: <SiMinutemailer />,
    },
    {
      path: "/home/critical",
      name: "Alertas Criticas",
      icon: <TbAlertTriangleFilled />,
    },
    {
      path: "/home/template",
      name: "Plantillas de Alerta",
      icon: <HiMiniBellAlert />,
    },
    { path: "/home/profile", name: "Perfil", icon: <FaUser /> },
    { path: "/home/settings", name: "Configuración", icon: <FaCog /> },
    { path: "/home/demo", name: "Demo", icon: <FaArchive /> },*/
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="top-section">
        <h1 className="logo">{isOpen ? "Conta Notify" : "C"}</h1>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </div>

      {/*<ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </li>
        ))}
      </ul>*/}

      <aside className="menu">
        <nav className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded hover:bg-green-700 ${
                  isActive ? "bg-green-700" : ""
                }`
              }
            >
              <div className="text-xl w-6 h-6 flex items-center justify-center">
                {item.icon}
              </div>
              {isOpen && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
