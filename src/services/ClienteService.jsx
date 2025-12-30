import axios from "axios";
import { toast } from "react-toastify";

const API_URL = `${import.meta.env.VITE_API_URL}/clientes`;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Crear cliente
export const crearCliente = async (clienteData) => {
  try {
    const { data } = await axios.post(API_URL, clienteData, {
      headers: getAuthHeaders(),
    });
    toast.success("Cliente creado correctamente");
    return data;
  } catch (error) {
    const message =
      error.response?.data?.error ||
      error.message ||
      "Error al crear cliente";
    toast.error(message);
    throw error;
  }
};

// Buscar cliente por tipoDocumento y documento
export const buscarClientePorIdentidad = async (tipoDocumento, documento) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/by-identity?tipoDocumento=${tipoDocumento}&documento=${documento}`,
      {
        headers: getAuthHeaders(),
      }
    );
    localStorage.setItem("clienteId", data.cliente.id);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al buscar cliente";
    toast.error("No se encontró el cliente");
    throw error;
  }
};

// Obtener lista paginada
export const obtenerClientes = async (page = 0, size = 5, filtros = {}) => {
  try {
    const params = new URLSearchParams({
      page,
      size,
      ...(filtros.nombre && { nombre: filtros.nombre }),
      ...(filtros.razonSocial && { razonSocial: filtros.razonSocial }),
      ...(filtros.documento && { documento: filtros.documento }),
      ...(filtros.email && { email: filtros.email }),
      ...(localStorage.getItem("userId") && { idContador: localStorage.getItem("userId") }),
    });

    const { data } = await axios.get(`${API_URL}?${params.toString()}`, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener clientes";
    throw error;
  }
};

// Obtener cliente por ID
export const obtenerClientePorId = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener cliente";
    toast.error(message);
    throw error;
  }
};

// Actualizar cliente
export const actualizarCliente = async (id, clienteData) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, clienteData, {
      headers: getAuthHeaders(),
    });
    toast.success("Cliente actualizado correctamente");
    return data;
  } catch (error) {
    const message =
      error.response?.data?.error ||
      error.message ||
      "Error al actualizar cliente";
    toast.error(message);
    throw error;
  }
};

// Eliminar cliente
export const eliminarCliente = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, { headers: getAuthHeaders() });
    //toast.info("Cliente eliminado correctamente");
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al eliminar cliente";
    throw error;
  }
};
