import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { Save, ArrowLeft, Home, Users } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { crearCliente, obtenerClientePorId, actualizarCliente } from "../../services/ClienteService";
import { toast } from "react-toastify";

const ClienteForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // si existe → modo edición
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipoUsuario: "cliente",
    documento: "",
    tipoDocumento: "",
    telefono: "",
    razonSocial: "",
    notificar: false,
  });

  // 🧠 Si hay ID, cargar cliente existente
  useEffect(() => {
    if (id) {
      const fetchCliente = async () => {
        try {
          setLoading(true);
          const cliente = await obtenerClientePorId(id);
          setFormData(cliente.cliente);
        } catch (error) {
          toast.error("Error al cargar cliente");
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchCliente();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await actualizarCliente(id, formData);
        toast.success("Cliente actualizado correctamente");
      } else {
        await crearCliente(formData);
        toast.success("Cliente creado exitosamente");
      }

      navigate("/home/clientes");
    } catch (error) {
      toast.error("Error al guardar cliente");
      console.error(error);
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
              <Link to="/home/clientes" className="hover:text-blue-600">Clientes</Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">
              {id ? "Editar Cliente" : "Crear Cliente"}
            </li>
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
              {id ? "Editar Cliente" : "Crear Cliente"}
            </h2>
          </div>

          <button
            type="submit"
            form="clienteForm"
            disabled={loading}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <Save size={18} />
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>

        {/* Formulario */}
        <form
          id="clienteForm"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Tipo Documento:</label>
            <select
              name="tipoDocumento"
              value={formData.tipoDocumento || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Seleccione</option>
              <option value="cedula">Cédula</option>
              <option value="nit">NIT</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Documento:</label>
            <input
              type="text"
              name="documento"
              value={formData.documento || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Razón Social:</label>
            <input
              type="text"
              name="razonSocial"
              value={formData.razonSocial || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Switch de notificación */}
          <div className="col-span-full flex items-center gap-3 mt-4">

            <span className="text-gray-700"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteForm;
