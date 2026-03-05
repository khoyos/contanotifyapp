import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import ModalConfiguracionNotificaciones from "../../pages/ModalConfiguracionNotificaciones";
import { obtenerConfiguracionCliente } from "../../services/ConfiguracionService";

const TableConfiguracionClientes = ({ loading }) => {

  const [clientesList, setClientesList] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const cargarClientes = async () => {
    try {
      const data = await obtenerConfiguracionCliente();
      setClientesList(data.config || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return (
    <div className="p-6">

      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Configuración de notificaciones
        </h2>

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
                    <td className="p-3">{c.usuarioDTO.nombre}</td>
                    <td className="p-3">{c.usuarioDTO.documento}</td>
                    <td className="p-3">{c.usuarioDTO.email}</td>
                    <td className="p-3">{c.usuarioDTO.telefono}</td>

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

      </div>

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