import React, { useEffect, useState, useCallback } from "react";
import { actualizarEstadoObligacion } from "../services/ObligacionService";
import { toast } from "react-toastify";
import { Search } from "lucide-react";
import TableMonitoreoObligaciones from "../components/Obligacion/TableMonitoreoObligaciones";
import { obtenerConfiguracionObligaciones } from "../services/ConfiguracionService";

const MonitoreoObligaciones = () => {
  const [obligacionesClientes, setObligacionesClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [filtros, setFiltros] = useState({
    identidadCliente: "",
    nombre: "",
    entidad: "",
    renta: "",
    pago: "",
    periodo: "",
    fecha: "",
    estado: "",
  });

  // 🔹 Cargar obligaciones con filtros y paginación
  const loadObligaciones = useCallback(
    async (pagina = 0, filtrosActuales = filtros) => {
      try {
        setLoading(true);
        const data = await obtenerConfiguracionObligaciones(pagina, 10, filtrosActuales);


        setObligacionesClientes(data.content || []);
        setTotalPages(data.totalPages || 1);
        setPage(pagina); //sincroniza el número de página actual
      } catch (error) {
        toast.error("Error al cargar obligaciones");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [filtros]
  );

  // Buscar manualmente con filtros
  const handleBuscar = (e) => {
    e.preventDefault();
    loadObligaciones(0, filtros);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  // Navegación entre páginas
  const handlePrev = () => {
    if (page > 0) loadObligaciones(page - 1, filtros);
  };

  const handleNext = () => {
    if (page < totalPages - 1) loadObligaciones(page + 1, filtros);
  };

  // Guardar estado actualizado
  const handleSave = async (id, estado, observacion) => {
    if (!estado || estado === "Seleccionar") {
      toast.warn("Seleccione un estado antes de guardar");
      return;
    }

    try {
      const request = { id, estado, observacion };
      await actualizarEstadoObligacion(request);
      toast.success(`Estado actualizado a "${estado}"`);
      await loadObligaciones(page, filtros);
    } catch (error) {
      toast.error("Error al actualizar el estado");
      console.error(error);
    }
  };

  // Carga inicial
  useEffect(() => {
    loadObligaciones(0, filtros);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-md w-full max-w-7xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Monitoreo de Obligaciones
        </h1>

        {/* Filtros de búsqueda */}
        <form
          onSubmit={handleBuscar}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"
        >
          <input
            type="text"
            name="identidadCliente"
            value={filtros.identidadCliente}
            onChange={handleChange}
            placeholder="Buscar por Identidad"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[130px]"
          />

          <input
            type="text"
            name="nombre"
            value={filtros.nombre}
            onChange={handleChange}
            placeholder="Buscar por Nombre"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[130px]"
          />

                    <input
            type="text"
            name="entidad"
            value={filtros.entidad}
            onChange={handleChange}
            placeholder="Buscar por Entidad"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[130px]"
          />

          <input
            type="text"
            name="renta"
            value={filtros.renta}
            onChange={handleChange}
            placeholder="Buscar por Renta"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[130px]"
          />

          <input
            type="text"
            name="pago"
            value={filtros.pago}
            onChange={handleChange}
            placeholder="Buscar por Pago"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[130px]"
          />

          <input
            type="text"
            name="fecha"
            value={filtros.fecha}
            onChange={handleChange}
            placeholder="Fecha (YYYY-MM-DD)"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[180px]"
          />

          <select
            name="estado"
            value={filtros.estado}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Filtrar por estado</option>
            <option value="Por Hacer">Por Hacer</option>
            <option value="Elaboración">Elaboración</option>
            <option value="Pendiente por Documentos.">Pendiente por Documentos.</option>
            <option value="Declarado y Presentado">Declarado y Presentado</option>
          </select>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-700 text-white rounded-md p-2 transition"
          >
            <Search size={18} /> Buscar
          </button>
        </form>

        {/* Tabla de obligaciones */}
        <TableMonitoreoObligaciones
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

export default MonitoreoObligaciones;
