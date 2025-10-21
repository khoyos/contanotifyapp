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
    documento: "",
    email: "",
  });

  const navigate = useNavigate();

  // Memoizamos la función para que no cambie en cada render
  const loadClientes = useCallback(
    async (pagina = page, filtrosActuales = filtros) => {
      try {
        setLoading(true);
        const data = await obtenerClientes(pagina, 5, filtrosActuales);
        setClientes(data.content || data);
        setTotalPages(data.totalPages || 1);

        // Evita re-render si el valor es el mismo
        if (pagina !== page) setPage(pagina);
      } catch (error) {
        toast.error("Error al cargar clientes");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [page, filtros] // Solo se recrea si cambia la página o los filtros
  );

  // Evita nuevas referencias de funciones
  const handleBuscar = useCallback(
    (e) => {
      e.preventDefault();
      loadClientes(0, filtros);
    },
    [loadClientes, filtros]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // Se crea un nuevo objeto, pero React solo re-renderiza inputs
    setFiltros((prev) => ({ ...prev, [name]: value }));
  }, []);

  //Controla cambio de página con funciones estables
  const handlePrev = useCallback(() => {
    if (page > 0) setPage((p) => p - 1);
  }, [page]);

  const handleNext = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const handleEdit = useCallback(
    (id) => {
      navigate(`/home/editar-cliente/${id}`);
    },
    [navigate]
  );

  const handleDelete = useCallback(
    async (id) => {
      if (!window.confirm("¿Seguro que deseas eliminar este cliente?")) return;
      try {
        await eliminarCliente(id);
        toast.success("Cliente eliminado correctamente");
        loadClientes();
      } catch (error) {
        toast.error("Error al eliminar cliente");
        console.error(error);
      }
    },
    [loadClientes]
  );

  // Solo recarga clientes cuando cambian page o filtros
  useEffect(() => {
    loadClientes(page, filtros);
  }, [page, filtros, loadClientes]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-md w-full max-w-6xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Clientes</h2>
          <button
            onClick={() => navigate("/home/crear-cliente")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            + Nuevo Cliente
          </button>
        </div>

        {/* Barra de búsqueda */}
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
          onPrev={handlePrev}
          onNext={handleNext}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Clientes;
