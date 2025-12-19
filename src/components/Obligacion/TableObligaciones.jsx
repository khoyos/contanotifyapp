import React from "react";
import { Trash2, Edit } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/es"; // para idioma español

dayjs.locale("es");

const TableObligaciones = ({
  obligaciones,
  loading,
  page,
  totalPages,
  onPrev,
  onNext,
  onDelete,
}) => {
  return (
    <div>
      <div className="overflow-x-auto overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1e1e58] text-left text-white">
              <th className="p-3 border-b">Identidad</th>
              <th className="p-3 border-b">Nombre</th>
              <th className="p-3 border-b">Entidad</th>
              <th className="p-3 border-b">Renta</th>
              <th className="p-3 border-b">Pago</th>
              <th className="p-3 border-b">Fecha</th>
              <th className="p-3 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  Cargando clientes...
                </td>
              </tr>
            ) : obligaciones.length > 0 ? (
              obligaciones.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition">
                  <td className="p-3 border-b">{c.identidadCliente}</td>
                  <td className="p-3 border-b">{c.nombreCliente}</td>
                  <td className="p-3 border-b">{c.entidad.toUpperCase()}</td>
                  <td className="p-3 border-b">{c.renta}</td>
                  <td className="p-3 border-b">{c.pago.toUpperCase()}</td>
                  <td className="p-3 border-b">{dayjs(c.fecha).format("DD [de] MMMM [de] YYYY").toUpperCase()}</td>
                  <td className="p-3 border-b text-center">
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
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No hay configuraciónes registradas
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

export default TableObligaciones;
