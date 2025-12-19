import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="w-full bg-white text-[#1e1e58] flex justify-between items-center px-4 sm:px-6 py-3 shadow-md">
      <div className="flex items-center space-x-3">
        <div className="bg-white bg-opacity-20 p-2 rounded-lg"></div>
        <div>
          <h1 className="text-2xl font-bold">Conta Notify</h1>
          <p className="text-sm opacity-90">
            Notificaciones de Obligaciones Tributaria
          </p>
        </div>
      </div>
      {/* Texto de bienvenida */}
      <h1 className="text-lg sm:text-2xl font-bold">
        Bienvenido <span className="hidden sm:inline"></span>
      </h1>

      {/* Avatar + nombre de usuario */}
      <div className="relative flex items-center gap-2 sm:gap-3">
        {/* Nombre (solo visible en pantallas medianas en adelante) */}
        <div>
          <p className="font-bold sm:text-2xl leading-tight">{user}</p>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-[#1e1e58] text-white font-bold rounded-full">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#1e1e58]"
          >
            {user.charAt(0).toUpperCase()}
          </button>
        </div>

        {/* Dropdown */}
        {openMenu && (
          <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 bg-white text-[#1e1e58] rounded-lg shadow-lg p-4 z-50">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1e58] text-white font-bold">
                {user.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-[#1e1e58]">{user.username}</p>
                <p className="w-full text-left px-3 py-2 rounded">Contador Publico</p>
                {/*<NavLink 
                  to={"/home/profile"}
                  end
                  className="text-blue-600 text-sm"
                >
                  Ver tu perfil
                </NavLink>*/}
              </div>
            </div>

            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
                  Ayuda
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-red-600"
                  onClick={logout}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}