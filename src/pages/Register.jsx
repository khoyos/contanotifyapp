import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services/AuthService";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);

  // Validación OWASP de contraseña
  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8)
      errors.push("Debe tener al menos 8 caracteres.");
    if (!/[A-Z]/.test(password))
      errors.push("Debe contener al menos una letra mayúscula.");
    if (!/[a-z]/.test(password))
      errors.push("Debe contener al menos una letra minúscula.");
    if (!/[0-9]/.test(password))
      errors.push("Debe contener al menos un número.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      errors.push("Debe contener al menos un símbolo especial.");
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      setPasswordErrors(validatePassword(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones previas
    if (!formData.name.trim()) {
      setError("Por favor, ingresa tu nombre completo.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    if (passwordErrors.length > 0) {
      setError("La contraseña no cumple los requisitos de seguridad.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    try {
        console.log('formData', formData);
      await registerService(
        formData.name.trim(),
        formData.email.toLowerCase().trim(),
        formData.password
      );

      setSuccess("Registro exitoso. Redirigiendo al inicio de sesión...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      //Mensaje genérico para evitar enumeración de usuarios
      setError(
        "No se pudo completar el registro. Verifica tus datos e inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Crear cuenta</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {passwordErrors.length > 0 && (
          <ul className="text-xs text-red-500 mb-3 list-disc list-inside">
            {passwordErrors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary-blue text-white py-2 rounded hover:opacity-90"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrar usuario"}
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">
            ¿Ya tienes cuenta?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
