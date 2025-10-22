import React, { useEffect, useState, useCallback } from "react";
import { actualizarEstadoObligacion } from "../services/ObligacionService";
import { toast } from "react-toastify";
import { Search } from "lucide-react";
import TableRastreoObligaciones from "../components/Obligacion/TableRastreoObligaciones";
import { obtenerConfiguracionObligaciones } from "../services/ConfiguracionService";

const RastreoObligaciones = () => {
  const [obligacionesClientes, setObligacionesClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [filtros, setFiltros] = useState({
    cliente: "",
    periodo: "",
    estado: "",
  });

  const loadObligaciones = useCallback(
    async (pagina = page, filtrosActuales = filtros) => {
      try {
        setLoading(true);
        const data = await obtenerConfiguracionObligaciones(pagina, 5, filtrosActuales);
        console.log("data obligaciones", data.content)
        setObligacionesClientes(data.content || data);
        setTotalPages(data.totalPages || 1);
        if (pagina !== page) setPage(pagina);
      } catch (error) {
        toast.error("Error al cargar obligaciones");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [page, filtros]
  );

  const handleBuscar = (e) => {
    e.preventDefault();
    loadObligaciones(0, filtros);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrev = () => {
    if (page > 0) setPage((p) => p - 1);
  };

  const handleNext = () => {
    setPage((p) => p + 1);
  };

  const handleSave = async (id, estado, observacion) => {
    if (!estado) {
      toast.warn("Seleccione un estado antes de guardar");
      return;
    }

    try {

      const request = {
        id: id,
        estado: estado,
        observacion: observacion
      }

      await actualizarEstadoObligacion(request);
      toast.success(`Estado actualizado a "${estado}"`);
      loadObligaciones();
    } catch (error) {
      toast.error("Error al actualizar el estado");
      console.error(error);
    }
  };

  useEffect(() => {
    loadObligaciones(page, filtros);
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-md w-full max-w-7xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Rastreo de Obligaciones
        </h1>

        <form
          onSubmit={handleBuscar}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"
        >
          <input
            type="text"
            name="cliente"
            value={filtros.cliente}
            onChange={handleChange}
            placeholder="Buscar cliente"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="periodo"
            value={filtros.periodo}
            onChange={handleChange}
            placeholder="Filtrar por periodo"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="estado"
            value={filtros.estado}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Filtrar por estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En revisión">En revisión</option>
            <option value="Declarado">Declarado</option>
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md p-2 transition"
          >
            <Search size={18} /> Buscar
          </button>
        </form>

        <TableRastreoObligaciones
          obligacionesClientes={obligacionesClientes}
          loading={loading}
          page={page}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default RastreoObligaciones;
