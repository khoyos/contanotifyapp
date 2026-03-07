// src/services/ConfiguracionService.jsx
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = `${import.meta.env.VITE_API_URL}`;
//const API_URL = `${process.env.VITE_API_URL}/`;

// Función auxiliar para agregar headers con token JWT
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Guardar configuración del cliente
export const guardarConfiguracionCliente = async (data) => {
  try {
    const { data: response } = await axios.post(
      `${API_URL}/configurarcliente/register`,
      data,
      { headers: getAuthHeaders() }
    );

    toast.success("Configuración del cliente guardada correctamente");
    return response;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al guardar la configuración del cliente";
    toast.error(message);
    throw error;
  }
};

// Guardar obligación del cliente
export const guardarObligacionCliente = async (data) => {
  try {
    const { data: response } = await axios.post(
      `${API_URL}/obligacioncliente/register`,
      data,
      { headers: getAuthHeaders() }
    );

    toast.success("Obligación del cliente guardada correctamente");
    return response;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al guardar la obligación del cliente";
    toast.error(message);
    throw error;
  }
};

// Guardar configuracion obligaciones
export const guardarConfiguracionObligaciones = async (data) => {
  try {
    const { data: response } = await axios.post(
      `${API_URL}/obligacioncliente/configuracion-obligaciones/register`,
      data,
      { headers: getAuthHeaders() }
    );

    toast.success("Configuracion obligacion del cliente guardada correctamente");
    return response;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al guardar la obligación del cliente";
    toast.error(message);
    throw error;
  }
};


// Obtener lista paginada
export const obtenerConfiguracionObligaciones = async (page = 0, size = 10, filtros = {}) => {
  try {

    const params = new URLSearchParams({
        page,
        size,
        ...(filtros.identidadCliente && { identidadCliente: filtros.identidadCliente }),
        ...(filtros.nombre && { nombre: filtros.nombre }),
        ...(filtros.entidad && { entidad: filtros.entidad }),
        ...(filtros.renta && { renta: filtros.renta }),
        ...(filtros.pago && { pago: filtros.pago }),
        ...(filtros.fecha && { fecha: filtros.fecha }),
        ...(filtros.estado && { estado: filtros.estado }),
        ...(localStorage.getItem("userId") && { idContador: localStorage.getItem("userId") }),
     });

     const { data } = await axios.get(`${API_URL}/obligacioncliente/obligaciones?${params.toString()}`, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener configuracion obligaciones";
    //toast.error(message);
    throw error;
  }
};

export const actualizarConfiguracionCliente = async (data) => {
    try {
    const { data: response } = await axios.put(
      `${API_URL}/configurarcliente/update`,
      data,
      { headers: getAuthHeaders() }
    );

    toast.success("Configuración del cliente actualizado correctamente");
    return response;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al guardar la configuración del cliente";
    toast.error(message);
    throw error;
  }
};

// services/ConfiguracionService.js

export const buscarConfiguraciones = async (page = 0, size = 10, filtros = {}) => {
  try {

    const params = new URLSearchParams({
      page,
      size,
      idContador: localStorage.getItem("userId"),
      ...(filtros.nombre && { nombre: filtros.nombre }),
      ...(filtros.documento && { documento: filtros.documento }),
      ...(filtros.email && { email: filtros.email }),
    });

    const { data } = await axios.get(
      `${API_URL}/configurarcliente/find?${params.toString()}`,
      {
        headers: getAuthHeaders(),
      }
    );

    return data;

  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener configuración de clientes";
    console.error(message);

    throw error;
  }

};
