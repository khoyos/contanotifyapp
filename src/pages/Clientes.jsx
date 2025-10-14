import React, { useEffect, useState } from "react";
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


  const loadClientes = async (pagina = 0, filtrosActuales = filtros) => {
    try {
      setLoading(true);
      const data = await obtenerClientes(pagina, 5 , filtrosActuales); // tu servicio debe aceptar paginación
      setClientes(data.content || data);
      setTotalPages(data.totalPages || 1);
      setPage(pagina);
    } catch (error) {
      toast.error("Error al cargar clientes");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    loadClientes(0, filtros);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  useEffect(() => {
    loadClientes();
  }, [page]);

  const handleEdit = (id) => {
    navigate(`/home/editar-cliente/${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este cliente?")) return;
    try {
      await eliminarCliente(id);
      toast.success("Cliente eliminado correctamente");
      loadClientes();
    } catch (error) {
      toast.error("Error al eliminar cliente");
      console.error(error);
    }
  };

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

        {/*Barra de búsqueda */}
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
          onPrev={() => loadClientes(page - 1, filtros)}
          onNext={() => loadClientes(page + 1, filtros)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />


      </div>
    </div>
  );
};

export default Clientes;
