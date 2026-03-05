import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoContaNotify from "../assets/logo_contanotify_v4.svg";
import UndrawSyncFriends from "../assets/undraw_sync_friends.svg";
import { forgotPasswordService } from "../services/AuthService";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const resp = await forgotPasswordService(email.toLowerCase());
      setMessage(
        "Si el correo existe en el sistema, recibirás un enlace para restablecer tu contraseña."
      );
    } catch {
      setError("No se pudo procesar la solicitud. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex text-gray-700" style={{ fontFamily: "Inter, system-ui" }}>
      
      {/* Columna formulario */}
      <div className="w-full lg:w-5/12 xl:w-4/12 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-sm">
          
          <div className="mb-8 text-center">
            <img src={LogoContaNotify} className="w-24 mx-auto mb-2" />
            <h1 className="text-3xl font-bold text-[#1e1e58]">ContaNotify</h1>
            <p className="text-sm text-[#1e1e58]">
              Recuperación de contraseña
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {message && (
              <p className="text-green-700 bg-green-50 p-3 rounded border border-green-200">
                {message}
              </p>
            )}

            {error && (
              <p className="text-red-600 bg-red-50 p-3 rounded border border-red-200">
                {error}
              </p>
            )}

            <div>
              <label className="text-sm font-medium text-[#1e1e58]">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-[#1e1e58] text-white py-3 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar enlace"}
            </button>

            <p className="text-sm text-center">
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Volver al inicio de sesión
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="hidden lg:flex w-7/12 bg-gray-50 items-center justify-center">
        <img src={UndrawSyncFriends} className="w-3/4" />
      </div>
    </div>
  );
}