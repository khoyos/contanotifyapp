import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}`;
//const API_URL = `${process.env.VITE_API_URL}/`;

export const FileService = {
  uploadPdf: (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(`${API_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
