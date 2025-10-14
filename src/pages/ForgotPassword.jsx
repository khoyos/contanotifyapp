import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/api/auth/request-reset";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const resp = await axios.post(url, { email });
      if (resp.status === 200) {
        setMessage("Si el correo existe en el sistema, recibirás un enlace de recuperación.");
      }
    } catch (err) {
      setError("No se pudo procesar la solicitud. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Recuperar contraseña</h2>
        {message && <p className="text-green-600 mb-2">{message}</p>}
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Correo registrado"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-2 rounded hover:opacity-90"
        >
          Enviar enlace
        </button>
      </form>
    </div>
  );
}
