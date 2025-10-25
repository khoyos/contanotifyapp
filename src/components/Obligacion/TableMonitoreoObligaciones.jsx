import React, { useState, useEffect, useRef } from "react";
import { Save, Edit, X, ChevronDown, Eye } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const estados = [
  { label: "Por Hacer", color: "bg-white", dot: "bg-blue-500", button: "text-blue-700 border-blue-300 bg-blue-50" },
  { label: "Elaboración", color: "bg-yellow-100", dot: "bg-yellow-400", button: "text-yellow-700 border-yellow-300 bg-yellow-50" },
  { label: "Pendiente por Documentos.", color: "bg-red-100", dot: "bg-red-500", button: "text-red-700 border-red-300 bg-red-50" },
  { label: "Declarado y Presentado", color: "bg-green-100", dot: "bg-green-500", button: "text-green-700 border-green-300 bg-green-50" },
];

const TableMonitoreoObligaciones = ({
  obligacionesClientes = [],
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
  const [savedEstados, setSavedEstados] = useState({});
  const [savedObservaciones, setSavedObservaciones] = useState({});
  const [editando, setEditando] = useState({});
  const [verMasId, setVerMasId] = useState(null);
  const dropdownRef = useRef(null);

  // ✅ Inicializa los estados con "Por Hacer" si no hay otro estado definido
  useEffect(() => {
    const inicialObs = {};
    const inicialEstado = {};
    obligacionesClientes.forEach((o) => {
      inicialObs[o.id] = o.observacion || "";
      inicialEstado[o.id] = o.estado || "Por Hacer";
    });
    setObservaciones(inicialObs);
    setSelectedEstado(inicialEstado);
    setSavedEstados(inicialEstado);
    setSavedObservaciones(inicialObs);
    setEditando({});
    setShowDropdown(null);
  }, [obligacionesClientes]);

  // ✅ Maneja el cambio de estado y borra observación según el valor seleccionado
  const handleEstadoChange = (id, estado) => {
    setSelectedEstado((prev) => ({ ...prev, [id]: estado }));

    // Borrar observación si el estado es "Declarado y Presentado" o "Elaboración"
    if (["Declarado y Presentado", "Elaboración", "Por Hacer"].includes(estado)) {
      setObservaciones((prev) => ({ ...prev, [id]: "" }));
    }

    setShowDropdown(null);
  };

  const handleObservationChange = (id, value) => {
    setObservaciones((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (id) => {
    const estado = selectedEstado[id] || "Por Hacer";
    const observacion = observaciones[id] || "";

    if (onSave) onSave(id, estado, observacion);

    setSavedEstados((prev) => ({ ...prev, [id]: estado }));
    setSavedObservaciones((prev) => ({ ...prev, [id]: observacion }));
    setEditando((prev) => ({ ...prev, [id]: false }));
    setShowDropdown(null);
  };

  const handleCancel = (id) => {
    setSelectedEstado((prev) => ({ ...prev, [id]: savedEstados[id] || "Por Hacer" }));
    setObservaciones((prev) => ({ ...prev, [id]: savedObservaciones[id] || "" }));
    setEditando((prev) => ({ ...prev, [id]: false }));
    setShowDropdown(null);
  };

  const handleEdit = (id) => {
    setEditando((prev) => ({ ...prev, [id]: true }));
    setShowDropdown(null);
  };

  return (
    <div className="relative border border-gray-200 rounded-xl bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-blue-50 text-gray-700 font-semibold sticky top-0 z-10">
            <tr>
              {[
                "Identificación",
                "Cliente",
                "Tipo de Declaración",
                "Pago",
                "Periodo",
                "Fecha Límite",
                "Estado",
                "Observaciones",
                "Acción",
              ].map((header) => (
                <th
                  key={header}
                  className="p-3 border-b border-gray-200 whitespace-nowrap text-sm md:text-base"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center p-6 text-gray-500">
                  Cargando obligaciones...
                </td>
              </tr>
            ) : obligacionesClientes.length > 0 ? (
              obligacionesClientes.map((o) => {
                const estadoActual = selectedEstado[o.id] ?? "Por Hacer";
                const colorFila =
                  estados.find((e) => e.label === estadoActual)?.color || "bg-white";
                const colorBoton =
                  estados.find((e) => e.label === estadoActual)?.button ||
                  "text-gray-700 border-gray-300 bg-white";

                const estaEditando = !!editando[o.id];
                const estaBloqueado = !estaEditando;

                return (
                  <tr
                    key={o.id}
                    className={`${colorFila} transition-colors duration-200`}
                  >
                    <td className="p-3 border-b border-gray-200">{o.identidadCliente}</td>
                    <td className="p-3 border-b border-gray-200">{o.nombreCliente}</td>
                    <td className="p-3 border-b border-gray-200">{o.renta}</td>
                    <td className="p-3 border-b border-gray-200">{o.pago}</td>
                    <td className="p-3 border-b border-gray-200">{o.periodo}</td>
                    <td className="p-3 border-b border-gray-200">
                      {o.fecha ? dayjs(o.fecha).format("DD [de] MMMM [de] YYYY") : "-"}
                    </td>

                    {/* Estado */}
                    <td className="p-3 border-b border-gray-200 relative">
                      <button
                        disabled={estaBloqueado}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDropdown((prev) => (prev === o.id ? null : o.id));
                        }}
                        className={`flex items-center gap-2 px-3 py-1 border rounded-md transition ${colorBoton} ${
                          estaBloqueado
                            ? "opacity-60 cursor-not-allowed"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <span
                          className={`w-3 h-3 rounded-full ${
                            estados.find((s) => s.label === estadoActual)?.dot ||
                            "bg-gray-400"
                          }`}
                        ></span>
                        <span className="whitespace-nowrap">
                          {estadoActual || "Por Hacer"}
                        </span>
                        <ChevronDown size={16} className="text-gray-500" />
                      </button>

                      {/* Dropdown */}
                      {showDropdown === o.id && !estaBloqueado && (
                        <div className="absolute z-50 bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-56">
                          {estados.map((estado) => (
                            <div
                              key={estado.label}
                              onClick={() => handleEstadoChange(o.id, estado.label)}
                              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                            >
                              <span className={`w-3 h-3 rounded-full ${estado.dot}`}></span>
                              <span className="text-sm">{estado.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>

                    {/* Observaciones */}
                    <td className="p-3 border-b border-gray-200">
                      <div className="flex items-start gap-3">
                        <textarea
                          disabled={estaBloqueado}
                          className={`flex-1 border rounded-lg p-2 text-sm resize-none transition ${
                            estaBloqueado
                              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                              : "bg-white focus:ring-2 focus:ring-blue-400"
                          }`}
                          rows={2}
                          placeholder="Escribe una observación..."
                          value={observaciones[o.id] ?? ""}
                          onChange={(e) => handleObservationChange(o.id, e.target.value)}
                        />
                        <button
                          onClick={() =>
                            setVerMasId((prev) => (prev === o.id ? null : o.id))
                          }
                          className="p-2 rounded-md text-blue-500 hover:bg-blue-50 transition"
                          title="Ver más"
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>

                    {/* Acciones */}
                    <td className="p-3 border-b border-gray-200 text-center">
                      {estaEditando ? (
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => handleSave(o.id)}
                            className="text-green-600 hover:text-green-700 transition"
                            title="Guardar cambios"
                          >
                            <Save size={18} />
                          </button>
                          <button
                            onClick={() => handleCancel(o.id)}
                            className="text-red-500 hover:text-red-600 transition"
                            title="Cancelar edición"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEdit(o.id)}
                          className="text-blue-600 hover:text-blue-700 transition"
                          title="Editar fila"
                        >
                          <Edit size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-6 text-gray-500 italic">
                  No hay obligaciones registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {!loading && (
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 pb-4 text-gray-600 text-sm gap-2">
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

          <p className="text-sm text-gray-700">
            Página {page + 1} de {totalPages || 1}
          </p>

          <button
            disabled={page >= totalPages - 1}
            onClick={onNext}
            className={`px-4 py-2 rounded-md border ${
              page >= totalPages - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 border-gray-300 text-gray-700"
            }`}
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
};

export default TableMonitoreoObligaciones;
