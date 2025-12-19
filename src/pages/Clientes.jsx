import React, { useEffect, useState, useCallback } from "react";
import TableClientes from "../components/cliente/TableClientes";
import { obtenerClientes, eliminarCliente } from "../services/ClienteService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Search } from "lucide-react";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [filtros, setFiltros] = useState({
    nombre: "",
    razonSocial: "",
    documento: "",
    email: "",
  });

  const navigate = useNavigate();

  // 🔄 Carga de clientes
  const loadClientes = useCallback(
    async (pagina = page, filtrosActuales = filtros) => {
      try {
        setLoading(true);
        const data = await obtenerClientes(pagina, 10, filtrosActuales);
        setClientes(data.content || data);
        setTotalPages(data.totalPages || 1);
        if (pagina !== page) setPage(pagina);
      } catch (error) {
        toast.error("Error al cargar clientes");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [page, filtros]
  );

  // 🔍 Buscar
  const handleBuscar = useCallback(
    (e) => {
      e.preventDefault();
      loadClientes(0, filtros);
    },
    [loadClientes, filtros]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  }, []);

  // ⬅️➡️ Paginación
  const handlePrev = useCallback(() => {
    if (page > 0) setPage((p) => p - 1);
  }, [page]);

  const handleNext = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  // ✏️ Editar cliente
  const handleEdit = useCallback(
    (id) => {
      navigate(`/home/editar-cliente/${id}`);
    },
    [navigate]
  );

  // 🗑️ Eliminar cliente (sin confirm nativo)
  const handleDelete = useCallback(
    async (id) => {
      try {
        await eliminarCliente(id);
        toast.success("Cliente eliminado correctamente");
        await loadClientes();
      } catch (error) {
        toast.error("Error al eliminar cliente");
        console.error(error);
      }
    },
    [loadClientes]
  );

  // 🔁 Efecto para cargar datos
  useEffect(() => {
    loadClientes(page, filtros);
  }, [page, filtros, loadClientes]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-md w-full max-w-6xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Clientes</h2>
          <button
            onClick={() => navigate("/home/crear-cliente")}
            className="bg-[#3b82f6] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Nuevo Cliente
          </button>
        </div>

        {/* 🔎 Barra de búsqueda */}
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
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <input
            type="text"
            name="documento"
            value={filtros.documento}
            onChange={handleChange}
            placeholder="Buscar por documento"
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <input
            type="text"
            name="email"
            value={filtros.email}
            onChange={handleChange}
            placeholder="Buscar por email"
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-700 text-white rounded-md p-2 transition"
          >
            <Search size={18} /> Buscar
          </button>
        </form>

        {/* 📋 Tabla de clientes */}
        <TableClientes
          clientes={clientes}
          loading={loading}
          page={page}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
          onEdit={handleEdit}
          onDelete={handleDelete} // ✅ Modal se encarga de confirmar
        />
      </div>
    </div>
  );
};

export default Clientes;
