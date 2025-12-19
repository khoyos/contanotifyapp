import React, { useState } from "react";
import { Trash2, Edit, X } from "lucide-react";

const TableClientes = ({
  clientes,
  loading,
  page,
  totalPages,
  onPrev,
  onNext,
  onEdit,
  onDelete,
}) => {
  const [clienteAEliminar, setClienteAEliminar] = useState(null);

  return (
    <div className="relative w-full">
      {/* Tabla */}
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full text-sm text-gray-700 border-collapse">
          <thead className="bg-[#1e1e58] text-white uppercase text-xs font-semibold">
            <tr>
              <th className="p-3 text-left border-b">Nombre</th>
              <th className="p-3 text-left border-b">Razón Social</th>
              <th className="p-3 text-left border-b">Tipo Documento</th>
              <th className="p-3 text-left border-b">Documento</th>
              <th className="p-3 text-left border-b">Email</th>
              <th className="p-3 text-left border-b">Teléfono</th>
              <th className="p-3 text-center border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-6 text-gray-500 italic"
                >
                  Cargando clientes...
                </td>
              </tr>
            ) : clientes.length > 0 ? (
              clientes.map((c) => (
                <tr
                  key={c.id}
                  className="hover:bg-blue-50 transition-colors border-b last:border-0"
                >
                  <td className="p-3">{c.nombre.toUpperCase()}</td>
                  <td className="p-3">{c.razonSocial.toUpperCase()}</td>
                  <td className="p-3">{c.tipoDocumento.toUpperCase()}</td>
                  <td className="p-3">{c.documento}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3">{c.telefono}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => onEdit(c.id)}
                      className="text-blue-600 hover:text-blue-800 mx-1"
                      title="Editar cliente"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => setClienteAEliminar(c)}
                      className="text-red-600 hover:text-red-800 mx-1"
                      title="Eliminar cliente"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-6 text-gray-500 italic"
                >
                  No hay clientes registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <button
          disabled={page === 0}
          onClick={onPrev}
          className={`px-4 py-2 rounded-md border ${
            page === 0
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white hover:bg-blue-50 text-blue-700 border-blue-300"
          }`}
        >
          ← Anterior
        </button>

        <p className="text-gray-600">
          Página {page + 1} de {totalPages}
        </p>

        <button
          disabled={page + 1 === totalPages}
          onClick={onNext}
          className={`px-4 py-2 rounded-md border ${
            page + 1 === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white hover:bg-blue-50 text-blue-700 border-blue-300"
          }`}
        >
          Siguiente →
        </button>
      </div>

      {/* Modal de confirmación de eliminación */}
      {clienteAEliminar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Fondo clickeable */}
          <div
            className="absolute inset-0"
            onClick={() => setClienteAEliminar(null)}
          ></div>

          {/* Contenido del modal */}
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-10 animate-fadeIn">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Confirmar eliminación
              </h3>
              <button
                onClick={() => setClienteAEliminar(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              ¿Seguro que deseas eliminar al cliente{" "}
              <strong>{clienteAEliminar.nombre}</strong>? Esta acción no se puede
              deshacer.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setClienteAEliminar(null)}
                className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50 transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onDelete(clienteAEliminar.id);
                  setClienteAEliminar(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(TableClientes);
