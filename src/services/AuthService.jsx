// Simulación de un servicio de autenticación
import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });

    // Aquí asumo que tu backend responde algo como:
    // { token: "jwt-token", user: { id, name, email, ... } }

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Usuario o contraseña inválidos.");
    } else {
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};

// Register Service
export const registerService = async (nombre, email, password) => {
  try {
    const userData = {
      nombre,
      email,
      password,
    };

    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error en registerService:", error);
    throw new Error(error.response?.data?.error || "Error al registrar usuario");
  }
};

// Forgot Password Service
export const forgotPasswordService = async (email) => {
  try {
    const userData = {
      email,
    };

    const response = await axios.post(`${API_URL}/request-reset`, userData);
    return response.data;
  } catch (error) {
    console.error("Error en forgotPasswordService:", error);
    throw new Error(error.response?.data?.error || "Error al cambiar la contraseña");
  }
};

// Reset Password Service
export const resetPasswordService = async (token, newPassword) => {
  try {
    const userData = {
      token,
      newPassword
    };

    const response = await axios.post(`${API_URL}/reset-password`, userData);
    return response.data;
  } catch (error) {
    console.error("Error en resetPasswordService:", error);
    return error.response?.data?.error;
    //throw new Error(error.response?.data?.error || "Error al cambiar la contraseña");
  }
};

export const logoutService = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
    return true;
  } catch (error) {
    return false;
  }
};