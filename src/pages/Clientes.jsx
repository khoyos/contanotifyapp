import React, { useEffect, useState } from "react";
import { obtenerClientes, eliminarCliente } from "../services/ClienteService";
import { PlusCircle, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TableClientes from "../components/cliente/TableClientes";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filtros, setFiltros] = useState({
    nombre: "",
    documento: "",
    email: "",
  });

  const navigate = useNavigate();

  const cargarClientes = async (pagina = 0, filtrosActuales = filtros) => {
    try {
      setLoading(true);
      const data = await obtenerClientes(pagina, 5, filtrosActuales);
      setClientes(data.content || []);
      setTotalPages(data.totalPages || 1);
      setPage(pagina);
    } catch (error) {
      console.error(error);
      toast.error("Error al cargar clientes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarClientes(0);
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este cliente?")) return;
    try {
      await eliminarCliente(id);
      toast.success("Cliente eliminado correctamente");
      cargarClientes(page);
    } catch (error) {
      toast.error("Error al eliminar cliente");
    }
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    cargarClientes(0, filtros);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-md w-full max-w-6xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Clientes</h2>
          <button
            onClick={() => navigate("/home/crear-cliente")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <PlusCircle size={18} /> Nuevo Cliente
          </button>
        </div>

        {/* 🔍 Barra de búsqueda */}
        <form
          onSubmit={handleBuscar}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"
        >
          <input
            type="text"
            name="nombre"
            value={filtros.nombre}
            onChange={handleChange}
            placeholder="Buscar por nombre"
            className="border rounded-md p-2 w-full"
          />
          <input
            type="text"
            name="documento"
            value={filtros.documento}
            onChange={handleChange}
            placeholder="Buscar por documento"
            className="border rounded-md p-2 w-full"
          />
          <input
            type="text"
            name="email"
            value={filtros.email}
            onChange={handleChange}
            placeholder="Buscar por email"
            className="border rounded-md p-2 w-full"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md p-2 transition"
          >
            <Search size={18} /> Buscar
          </button>
        </form>

        <TableClientes
          clientes={clientes}
          loading={loading}
          page={page}
          totalPages={totalPages}
          onPrev={() => cargarClientes(page - 1, filtros)}
          onNext={() => cargarClientes(page + 1, filtros)}
          onEdit={(id) => navigate(`/home/editar-cliente/${id}`)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Clientes;
