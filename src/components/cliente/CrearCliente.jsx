import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Save, ArrowLeft, Home, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { crearCliente } from "../../services/ClienteService";
import { toast } from "react-toastify";

const CrearCliente = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tipoUsuario: "cliente",
    numeroDocumento: "",
    tipoDocumento: "",
    telefono: "",
    razonSocial: "",
    notificar: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //const loadingToast = toast.loading("Creando cliente...");

    try {
      await crearCliente(formData);

      toast.success("Cliente creado exitosamente");

      setFormData({
        nombre: "",
        email: "",
        password: "",
        tipoUsuario: "cliente",
        documento: "",
        tipoDocumento: "",
        telefono: "",
        razonSocial: "",
        notificar: false,
      });

    } catch (error) {
      console.error("Error al crear cliente:", error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center py-10">
      <div className="bg-white rounded-xl shadow-md w-full max-w-5xl p-6">

        {/* 🧭 Miga de Pan */}
        <nav className="text-sm text-gray-600 mb-5">
          <ol className="flex items-center space-x-2">
            <li className="flex items-center gap-1">
              <Home size={16} className="text-gray-500" />
              <Link to="/home" className="hover:text-blue-600">Inicio</Link>
            </li>
            <li>/</li>
            <li className="flex items-center gap-1">
              <Users size={16} className="text-gray-500" />
              <Link to="/home/clientes" className="hover:text-blue-600">
                Clientes
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">Crear Cliente</li>
          </ol>
        </nav>

        {/* Encabezado */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
            >
              <ArrowLeft size={18} /> Volver
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">
              Crear Cliente
            </h2>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <Save size={18} /> {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
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
              <option value="Cedula">Cédula</option>
              <option value="NIT">NIT</option>
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
              onChange={(value) => setFormData({ ...formData, notificar: value })}
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
};

export default CrearCliente;
