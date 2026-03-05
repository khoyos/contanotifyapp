import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerService } from "../services/AuthService";
import { pay } from "../services/BillingService";
import LogoContaNotify from "../assets/logo_contanotify_v4.svg";
import UndrawMobileDevices from "../assets/undraw_mobile-devices.svg";
import PrivacityTerms from "./PrivacityTerms";
import TermsConditions from "./TermsConditions";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan ?? "FREE_TRIAL";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    plan: plan
  });

  // Estados de aceptación
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  // Control de popups
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("Debe tener al menos 8 caracteres.");
    if (!/[A-Z]/.test(password))
      errors.push("Debe contener al menos una letra mayúscula.");
    if (!/[a-z]/.test(password))
      errors.push("Debe contener al menos una letra minúscula.");
    if (!/[0-9]/.test(password))
      errors.push("Debe contener al menos un número.");
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password))
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

    if (formData.plan !== formData.plan) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!acceptedTerms || !acceptedPrivacy) {
      setError(
        "Debes aceptar los Términos de Servicio y la Política de Privacidad."
      );
      return;
    }

    setLoading(true);
    try {
      const response = await registerService(
        formData.name.trim(),
        formData.email.toLowerCase().trim(),
        formData.password,
        formData.plan
      );
      setSuccess("Registro exitoso. Redirigiendo al inicio de sesión...");
      if(formData.plan === "FREE_TRIAL"){
        setTimeout(() => navigate("/login"), 2000);
        return;
      }
      const result = await pay(response.user, formData.plan);
      window.location.href = result.url;      
      //setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(
        "No se pudo completar el registro. Verifica tus datos e inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex text-gray-700"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      }}
    >
      {/* Columna del Formulario */}
      <div className="w-full lg:w-5/12 xl:w-4/12 flex items-center justify-center p-6 lg:p-10 bg-white">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="w-24 h-24 mx-auto rounded-lg flex items-center justify-center">
              <img
                src={LogoContaNotify}
                alt="Logo de ContaNotify"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-bold text-gray-800">ContaNotify</span>
          </div>

          <h2 className="text-xl font-semibold mb-6 text-center">
            Registrar usuario
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-red-600 text-sm p-3 bg-red-50 rounded border border-red-200">
                {error}
              </p>
            )}
            {success && (
              <p className="text-green-600 text-sm p-3 bg-green-50 rounded border border-green-200">
                {success}
              </p>
            )}

            {/* Campos */}
            <div>
              <label className="text-sm font-medium block mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre y apellido"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="text-sm font-medium block mb-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mín. 8 caracteres, mayús, minús, número y símbolo"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md pr-10 focus:ring-blue-500 focus:border-blue-500 transition"
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

            {passwordErrors.length > 0 && (
              <ul className="text-xs text-red-500 mb-3 ml-2 space-y-1">
                <li className="font-semibold">Requisitos de Contraseña:</li>
                {passwordErrors.map((err, i) => (
                  <li key={i} className="list-disc ml-4">
                    {err}
                  </li>
                ))}
              </ul>
            )}

            <div>
              <label className="text-sm font-medium block mb-1">
                Confirmar contraseña
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Repite tu contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md pr-10 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
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

            {/* Casillas separadas */}
            <div className="flex items-start text-sm space-x-2 mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={() => setShowTerms(true)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="terms" className="leading-tight cursor-pointer">
                Acepto los{" "}
                <span className="text-blue-600 hover:underline">
                  Términos de Servicio
                </span>
              </label>
            </div>

            <div className="flex items-start text-sm space-x-2 mt-2">
              <input
                type="checkbox"
                id="privacy"
                checked={acceptedPrivacy}
                onChange={() => setShowPrivacy(true)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="privacy" className="leading-tight cursor-pointer">
                Acepto la{" "}
                <span className="text-blue-600 hover:underline">
                  Política de Privacidad
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e1e58] text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrar usuario"}
            </button>

            <p className="text-center text-sm pt-2">
              ¿Ya tienes cuenta?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 hover:underline cursor-pointer font-medium"
              >
                Inicia sesión aquí
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="hidden lg:flex w-7/12 xl:w-8/12 bg-gray-50 items-center justify-center relative overflow-hidden p-10">
        <img
          src={UndrawMobileDevices}
          alt="UndrawMobileDevices"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Terminos y condiciones */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 custom-max-w rounded-2xl shadow-xl max-w-lg w-full animate-fadeIn">
            <TermsConditions setShowTerms={setShowTerms} setAcceptedTerms={setAcceptedTerms}/>
          </div>
        </div>
      )}

      {/* Modal Privacidad */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 custom-max-w rounded-2xl shadow-xl max-w-lg w-full animate-fadeIn">
            <PrivacityTerms setShowPrivacy={setShowPrivacy} setAcceptedPrivacy={setAcceptedPrivacy}/>
          </div>
        </div>
      )}
    </div>
  );
}
