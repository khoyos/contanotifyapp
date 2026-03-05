import React, { useEffect, useState } from "react";
import TableConfiguracionClientes from "../components/cliente/TableConfiguracionClientes";
import { obtenerConfiguracionCliente } from "../services/ConfiguracionService";

const ConfiguracionCliente = () => {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    try {

      const data = await obtenerConfiguracionCliente();
      setClientes(data.config);

    } catch (error) {
      console.error("Error cargando clientes", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <TableConfiguracionClientes
        clientes={clientes}
        loading={loading}
      />

    </div>
  );
};

export default ConfiguracionCliente;