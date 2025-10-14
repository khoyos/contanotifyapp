import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/AuthService";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const resp = await loginService(email, password);
      console.log(resp);
      // guardar en localStorage (simulando JWT real)
      localStorage.setItem("token", resp.token);
      localStorage.setItem("user", JSON.stringify(resp.user));
      localStorage.setItem("userId", resp.userId);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-2 rounded hover:opacity-90"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Cargando..." : "Ingresar"}
        </button>
        <div className="mt-4 text-center">
        <p className="text-sm">
          ¿Olvidaste tu contraseña?{" "}
          <span
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Recupérala aquí
          </span>
        </p>
      </div>

      </form>
    </div>
  );
}
