import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Save } from "lucide-react";
import { crearCliente } from "../services/ClienteService";

const CrearCliente = () => {
 const [formData, setFormData] = useState({
    nombre: "",
    razonSocial: "",
    tipoDocumento: "",
    documento: "",
    email: "",
    telefono: "",
    notificar: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearCliente(formData);
      setFormData({
        nombre: "",
        razonSocial: "",
        tipoDocumento: "",
        documento: "",
        email: "",
        telefono: "",
        notificar: false,
      });
    } catch (error) {
      // ya se maneja con toast en el servicio
      console.error("Error al crear cliente:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-md w-full max-w-5xl p-6">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Crear cliente
          </h2>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Save size={18} /> Guardar
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ingrese nombre"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Tipo Documento:</label>
            <select
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Seleccione</option>
              <option value="CC">Cédula</option>
              <option value="NIT">NIT</option>
              <option value="CE">Cédula Extranjera</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Documento:</label>
            <input
              type="text"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Número de documento"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Razón Social:</label>
            <input
              type="text"
              name="razonSocial"
              value={formData.razonSocial}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Nombre de empresa"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="ejemplo@gmail.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ej: 3001234567"
            />
          </div>

          {/* Switch de notificación */}
          <div className="col-span-full flex items-center gap-3 mt-4">
            <Switch
              checked={formData.notificar}
              onChange={(value) =>
                setFormData({ ...formData, notificar: value })
              }
              className={`${
                formData.notificar ? "bg-blue-600" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${
                  formData.notificar ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
            <span className="text-gray-700">¿Deseas que le notifiquemos?</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearCliente