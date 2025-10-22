import React from "react";
import { Trash2, Edit } from "lucide-react";

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
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-50 text-left">
              <th className="p-3 border-b">Nombre</th>
              <th className="p-3 border-b">Razon Social</th>
              <th className="p-3 border-b">Tipo Documento</th>
              <th className="p-3 border-b">Documento</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Teléfono</th>
              <th className="p-3 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  Cargando clientes...
                </td>
              </tr>
            ) : clientes.length > 0 ? (
              clientes.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition">
                  <td className="p-3 border-b">{c.nombre.toUpperCase()}</td>
                  <td className="p-3 border-b">{c.razonSocial.toUpperCase()}</td>
                  <td className="p-3 border-b">{c.tipoDocumento.toUpperCase()}</td>
                  <td className="p-3 border-b">{c.documento}</td>
                  <td className="p-3 border-b">{c.email}</td>
                  <td className="p-3 border-b">{c.telefono}</td>
                  <td className="p-3 border-b text-center">
                    <button
                      onClick={() => onEdit(c.id)}
                      className="text-blue-600 hover:text-blue-800 mx-2"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(c.id)}
                      className="text-red-600 hover:text-red-800 mx-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No hay clientes registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-6">
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
    </div>
  );
};

export default React.memo(TableClientes);