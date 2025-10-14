// src/services/MasterService.jsx
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080/api/masters";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

//Consultar entidades
export const obtenerEntidades = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/entidades`, {
      headers: getAuthHeaders(),
    });
    return data; // Se espera que el backend devuelva un arreglo de objetos u opciones
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener las entidades";
    toast.error(message);
    throw error;
  }
};

// Consultar obligaciones
export const obtenerObligaciones = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/obligaciones`, {
      headers: getAuthHeaders(),
    });
    return data; // Se espera que el backend devuelva un arreglo de objetos u opciones
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener las obligaciones";
    toast.error(message);
    throw error;
  }
};

//Consultar pagos según el id de la renta seleccionada
export const obtenerPagosPorRenta = async (idRenta) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/pagos`,
      { id: idRenta }, // Se envía el id en el cuerpo, como en el cURL
      { headers: getAuthHeaders() }
    );
    return data; // Devuelve la lista de pagos
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener los pagos";
    //toast.error(message);
    throw error;
  }
};


