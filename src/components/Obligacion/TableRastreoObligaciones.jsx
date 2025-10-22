import React, { useState } from "react";
import { Save, ChevronDown } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const estados = [
  { label: "Por Hacer", color: "bg-blue-100", dot: "bg-blue-500" },
  { label: "Elaboración", color: "bg-yellow-100", dot: "bg-yellow-400" },
  { label: "Pendiente por Documentos.", color: "bg-red-100", dot: "bg-red-500" },
   { label: "Declarado y Presentado", color: "bg-green-100", dot: "bg-green-500" },
];

const TableRastreoObligaciones = ({
  obligacionesClientes,
  loading,
  page,
  totalPages,
  onPrev,
  onNext,
  onSave,
}) => {
  const [selectedEstado, setSelectedEstado] = useState({});
  const [showDropdown, setShowDropdown] = useState(null);
  const [observaciones, setObservaciones] = useState({});
  const [savedEstados, setSavedEstados] = useState({}); // Guardamos los estados ya confirmados

  const handleEstadoChange = (id, estado) => {
    setSelectedEstado((prev) => ({ ...prev, [id]: estado }));
    setShowDropdown(null);
  };

  const handleObservationChange = (id, value) => {
    setObservaciones((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (id) => {
    const estado = selectedEstado[id] || null;
    const observacion = observaciones[id] || "";

    if (onSave) onSave(id, estado, observacion);

    // Actualiza el color de la fila al guardar
    setSavedEstados((prev) => ({ ...prev, [id]: estado }));
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-blue-50 text-gray-700 font-semibold">
          <tr>
            <th className="p-3 border-b border-gray-200">Identificación</th>
            <th className="p-3 border-b border-gray-200">Cliente</th>
            <th className="p-3 border-b border-gray-200">Tipo de Declaración</th>
            <th className="p-3 border-b border-gray-200">Periodo</th>
            <th className="p-3 border-b border-gray-200">Fecha Límite</th>
            <th className="p-3 border-b border-gray-200">Estado</th>
            <th className="p-3 border-b border-gray-200">Observaciones</th>
            <th className="p-3 border-b border-gray-200 text-center">Acción</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="8" className="text-center p-6 text-gray-500">
                Cargando obligaciones...
              </td>
            </tr>
          ) : obligacionesClientes.length > 0 ? (
            obligacionesClientes.map((o) => {
              // 🔹 Determinar color de fondo según estado guardado
              const estadoActual = savedEstados[o.id] || selectedEstado[o.id] || o.estado;
              const colorFila =
                estados.find((e) => e.label === estadoActual)?.color || "bg-white";

              return (
                <tr
                  key={o.id}
                  className={`${colorFila} transition-colors duration-300 hover:bg-opacity-80`}
                >
                  <td className="p-3 border-b border-gray-200">{o.identidadCliente}</td>
                  <td className="p-3 border-b border-gray-200">{o.nombreCliente}</td>
                  <td className="p-3 border-b border-gray-200">{o.renta}</td>
                  <td className="p-3 border-b border-gray-200">{o.periodo}</td>
                  <td className="p-3 border-b border-gray-200">
                    {dayjs(o.fecha).format("DD [de] MMMM [de] YYYY").toUpperCase()}
                  </td>

                  {/* Estado */}
                  <td className="p-3 border-b border-gray-200 relative">
                    <button
                      onClick={() =>
                        setShowDropdown(showDropdown === o.id ? null : o.id)
                      }
                      className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-gray-700"
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${
                          estados.find((e) => e.label === selectedEstado[o.id] || o.estado)
                            ?.dot || "bg-gray-400"
                        }`}
                      ></span>
                      {selectedEstado[o.id] || o.estado || "Seleccionar"}
                      <ChevronDown size={16} className="text-gray-500" />
                    </button>

                    {showDropdown === o.id && (
                      <div className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-md mt-1 w-40">
                        {estados.map((estado) => (
                          <div
                            key={estado.label}
                            onClick={() => handleEstadoChange(o.id, estado.label)}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          >
                            <span
                              className={`w-3 h-3 rounded-full ${estado.dot}`}
                            ></span>
                            {estado.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </td>

                  {/* Observaciones */}
                  <td className="px-4 py-3 border-b border-gray-200">
                    <textarea
                      className="w-full border rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows={2}
                      placeholder="Escribe una observación..."
                      value={observaciones[o.id] || ""}
                      onChange={(e) =>
                        handleObservationChange(o.id, e.target.value)
                      }
                    />
                  </td>

                  {/* Guardar */}
                  <td className="p-3 border-b border-gray-200 text-center">
                    <button
                      onClick={() => handleSave(o.id)}
                      className="text-green-600 hover:text-green-700 transition"
                      title="Guardar cambios"
                    >
                      <Save size={18} />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="8" className="text-center p-6 text-gray-500 italic">
                No hay obligaciones registradas
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-4 px-4 pb-4 text-gray-600 text-sm">
        <button
          disabled={page === 0}
          onClick={onPrev}
          className={`px-4 py-2 rounded-md border ${
            page === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100 border-gray-300 text-gray-700"
          }`}
        >
          ← Anterior
        </button>

        <p>
          Página {page + 1} de {totalPages}
        </p>

        <button
          disabled={page + 1 === totalPages}
          onClick={onNext}
          className={`px-4 py-2 rounded-md border ${
            page + 1 === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100 border-gray-300 text-gray-700"
          }`}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default TableRastreoObligaciones;
