import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/billing`;
//const API_URL = `${process.env.VITE_API_URL}/billing`;


const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

//Consultar pagos según el id de la renta seleccionada
export const pay = async (userId, plan) => {
  try {
    const { data } = await axios.post(`${API_URL}/pay`, null, {
      params: {
        user: userId,
        planCode: plan,
      },
      headers: getAuthHeaders(),
    });
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Error al obtener los pagos";
    throw error;
  }
};

