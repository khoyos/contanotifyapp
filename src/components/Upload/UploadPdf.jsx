import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadedFile = {
  id: "",
  name: "",
  status: "",
};

const UploadPdf = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
      } else {
        alert("Solo se permiten archivos PDF.");
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Selecciona un archivo PDF primero");
      return;
    }

    const newFile = {
      id: crypto.randomUUID(),
      name: file.name,
      status: "Cargando",
    };

    setFiles((prev) => [...prev, newFile]);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // actualizar estado a completado
      setFiles((prev) =>
        prev.map((f) =>
          f.id === newFile.id ? { ...f, status: "Completado" } : f
        )
      );
    } catch (error) {
      console.error(error);
      setFiles((prev) =>
        prev.map((f) => (f.id === newFile.id ? { ...f, status: "Error" } : f))
      );
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Carga de archivo */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          📂 Subir documento PDF
        </h2>

        <div className="flex items-center space-x-4">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Subir
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            📑 Archivos cargados
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {files.map((f) => (
                <tr key={f.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {f.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {f.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full
                      ${
                        f.status === "Cargando"
                          ? "bg-yellow-100 text-yellow-800"
                          : f.status === "Completado"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {f.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {/* <button
                      onClick={() => navigate(`/files/${f.id}`)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Ver Detalles
                    </button> */}
                    <button
                      onClick={() => navigate(`/home/taxcalendar`)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
              {files.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No hay archivos cargados aún.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UploadPdf;
