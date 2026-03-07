import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import ModalConfiguracionNotificaciones from "../../pages/ModalConfiguracionNotificaciones";
import { buscarConfiguraciones } from "../../services/ConfiguracionService";
import { Search } from "lucide-react";

const TableConfiguracionClientes = () => {

  const [clientesList, setClientesList] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const [filtros, setFiltros] = useState({
    nombre: "",
    documento: "",
    email: "",
  });

  const cargarClientes = async () => {

    setLoading(true);

    try {

      const data = await buscarConfiguraciones(page, size, filtros);

      setClientesList(data.content || []);
      setTotalPages(data.totalPages || 0);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    cargarClientes();
  }, [page, filtros]);

  const handleFiltroChange = (e) => {

    const { name, value } = e.target;

    setPage(0);

    setFiltros({
      ...filtros,
      [name]: value
    });
  };

  const onPrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onNext = () => {
    if (page + 1 < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="p-6">

      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Configuración de notificaciones
        </h2>

        {/* FILTROS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

          <input
            type="text"
            name="nombre"
            placeholder="Buscar por nombre"
            value={filtros.nombre}
            onChange={handleFiltroChange}
            className="border rounded-md p-2"
          />

          <input
            type="text"
            name="documento"
            placeholder="Documento"
            value={filtros.documento}
            onChange={handleFiltroChange}
            className="border rounded-md p-2"
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={filtros.email}
            onChange={handleFiltroChange}
            className="border rounded-md p-2"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-700 text-white rounded-md p-2 transition"
            >
            <Search size={18} /> Buscar
          </button>

        </div>

        {/* TABLA */}

        <div className="overflow-x-auto shadow-md rounded-lg bg-white">

          <table className="min-w-full text-sm text-gray-700 border-collapse">

            <thead className="bg-[#1e1e58] text-white uppercase text-xs font-semibold">
              <tr>
                <th className="p-3 text-left border-b">Nombre</th>
                <th className="p-3 text-left border-b">Documento</th>
                <th className="p-3 text-left border-b">Email</th>
                <th className="p-3 text-left border-b">Teléfono</th>
                <th className="p-3 text-center border-b">Configuración</th>
              </tr>
            </thead>

            <tbody>

              {loading ? (

                <tr>
                  <td colSpan="5" className="text-center p-6 text-gray-500 italic">
                    Cargando clientes...
                  </td>
                </tr>

              ) : clientesList.length > 0 ? (

                clientesList.map((c) => (
                  
                  <tr
                    key={c.usuarioDTO.id}
                    className="hover:bg-blue-50 transition-colors border-b last:border-0"
                  >

                    <td className="p-3">
                      {c.usuarioDTO.nombre}
                    </td>

                    <td className="p-3">
                      {c.usuarioDTO.documento}
                    </td>

                    <td className="p-3">
                      {c.usuarioDTO.email}
                    </td>

                    <td className="p-3">
                      {c.usuarioDTO.telefono}
                    </td>

                    <td className="p-3 text-center">

                      <button
                        onClick={() =>
                          setClienteSeleccionado({
                            ...c.configurarClienteDTO,
                            nombre: c.usuarioDTO.nombre
                          })
                        }
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Settings size={18} />
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="5" className="text-center p-6 text-gray-500 italic">
                    No hay clientes registrados
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* PAGINACIÓN */}

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

      </div>

      {/* MODAL */}

      {clienteSeleccionado && (

        <ModalConfiguracionNotificaciones
          cliente={clienteSeleccionado}
          onClose={() => setClienteSeleccionado(null)}
          onSaved={cargarClientes}
        />

      )}

    </div>
  );
};

export default React.memo(TableConfiguracionClientes);