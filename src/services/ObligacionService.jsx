import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/obligacioncliente`; // Ajusta según tu backend
//const API_URL = `${process.env.VITE_API_URL}/obligacioncliente`; // Ajusta según tu backend

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

//Actualiza el estado de una obligación
export const actualizarEstadoObligacion = async (data) => {
  try {
    const response = await axios.put(`${API_URL}/${data.id}`, 
        data ,
        { headers: getAuthHeaders()}
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar estado de obligación:", error);
    throw error;
  }
};