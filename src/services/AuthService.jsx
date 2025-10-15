// Simulación de un servicio de autenticación
import axios from "axios";

const API_URL_LOGIN = "http://localhost:8080/api/auth/login";
const API_URL_OUT = "http://localhost:8080/api/auth/logout";

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(API_URL_LOGIN, { email, password });

    // Aquí asumo que tu backend responde algo como:
    // { token: "jwt-token", user: { id, name, email, ... } }

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Error en el login");
    } else {
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};  

export const logoutService = async () => {
  try {
    await axios.post(API_URL_OUT);
    return true;
  } catch (error) {
    return false;
  }
};