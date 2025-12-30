import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/AuthService";
import { useAuth } from "../context/AuthContext";
import LogoContaNotify from '../assets/logo_contanotify_v4.svg';
import UndrawSyncFriends from '../assets/undraw_sync_friends.svg';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await loginService(email.toLowerCase(), password);
      login(resp.user, resp.userId, resp.token);
      navigate("/home");
    } catch (err) {
      setError(err.message || "Error al iniciar sesión. Verifica tus credenciales.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex text-gray-700" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>

      {/* Columna del formulario */}
      <div className="w-full lg:w-5/12 xl:w-4/12 flex items-center justify-center p-6 lg:p-10 bg-white">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="w-24 h-24 mx-auto rounded-lg flex items-center justify-center">
              <img src={LogoContaNotify} alt="Logo de ContaNotify" className="w-full h-full object-contain" />
            </div>
            <span className="text-3xl font-bold text-[#1e1e58]">ContaNotify</span>
            <p className="text-sm text-[#1e1e58] mt-1">Notificaciones de Obligaciones Tributaria</p>
          </div>

          <h2 className="text-xl font-semibold mb-6 text-center">Inicio de sesión</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-red-600 text-sm p-3 bg-red-50 rounded border border-red-200">{error}</p>
            )}

            {/* Correo */}
            <div>
              <label className="text-sm font-medium block mb-1 text-[#1e1e58]">Correo electrónico</label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                required
              />
            </div>

            {/* Contraseña con ojito */}
            <div>
              <label className="text-sm font-medium block mb-1 text-[#1e1e58]">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // 👈 alterna el tipo
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    //  Icono de ojo abierto
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.6 1.957-1.84 3.684-3.542 5-1.702 1.316-3.8 2-6 2-2.2 0-4.298-.684-6-2-1.702-1.316-2.942-3.043-3.542-5z" />
                    </svg>
                  ) : (
                    // Icono de ojo tachado
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.99-4.99m3.362-2.19A9.969 9.969 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.969 9.969 0 01-1.357 2.568M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m6 0a3 3 0 01-3 3m-9 9l18-18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Olvidaste tu contraseña */}
            <div className="text-right text-sm">
              <span
                onClick={() => navigate("/forgot-password")}
                className="text-blue-600 hover:text-blue-700 cursor-pointer transition duration-150"
              >
                ¿Olvidaste tu contraseña?
              </span>
            </div>

            {/* Botón Ingresar */}
            <button
              type="submit"
              className="w-full bg-[#1e1e58] text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Ingresar"}
            </button>

            {/* Registrarse */}
            <p className="text-center text-sm pt-2">
              ¿No tienes una cuenta?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-600 hover:underline cursor-pointer font-medium"
              >
                Regístrate aquí
              </span>
            </p>

            {/* Aviso legal */}
            <div className="text-xs text-gray-500 text-center pt-4 border-t mt-6">
              <p>
                Al ingresar aceptas nuestros{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">Términos de servicio</span> y confirmas que has leído nuestra{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">Política de privacidad</span>.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="hidden lg:flex w-7/12 xl:w-8/12 bg-gray-50 items-center justify-center relative overflow-hidden p-10">
        <div className="relative text-white z-10 p-0">
          <img src={UndrawSyncFriends} alt="UndrawSyncFriends" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
