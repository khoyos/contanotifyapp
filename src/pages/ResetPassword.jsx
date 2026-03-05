import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPasswordService } from "../services/AuthService";

import LogoContaNotify from "../assets/logo_contanotify_v4.svg";


export default function ResetPassword() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const resp=resetPasswordService(token, password);
      if(resp.data){
        setMessage("Contraseña actualizada correctamente");
        setTimeout(() => navigate("/login"), 10000);
      }else{
        setError("No se puede procesar la petición porque el token a expirado");
        setTimeout(() => navigate("/login"), 9000);
      }

    } catch {
      setError("Token inválido o expirado");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <img src={LogoContaNotify} className="w-20 mx-auto mb-4" />

        <h2 className="text-xl font-semibold text-center mb-4">
          Nueva contraseña
        </h2>

        {message && (
          <p className="text-green-600 bg-green-50 p-2 rounded mb-2">
            {message}
          </p>
        )}

        {error && (
          <p className="text-red-600 bg-red-50 p-2 rounded mb-2">
            {error}
          </p>
        )}

        <input
          type="password"
          placeholder="Nueva contraseña"
          className="w-full p-3 border rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="w-full p-3 border rounded mb-4"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button className="w-full bg-[#1e1e58] text-white py-3 rounded hover:bg-blue-600">
          Cambiar contraseña
        </button>
      </form>
    </div>
  );
}
