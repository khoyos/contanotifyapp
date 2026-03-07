import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Save, X } from "lucide-react";
import {actualizarConfiguracionCliente} from '../services/ConfiguracionService'

const ModalConfiguracionNotificaciones = ({ cliente, onClose, onSaved  }) => {

  const [config, setConfig] = useState({
    publicId: cliente.publicId,
    notificarCliente: cliente.notificarCliente,
    notificarContador: cliente.notificarContador,
    notificarEmail: cliente.notificarEmail,
    notificarWhatsapp: cliente.notificarWhatsapp,
    notificarSms: cliente.notificarSms,
  });

  const opciones = [
    { label: "Notificar al cliente", key: "notificarCliente" },
    { label: "Notificar al contador", key: "notificarContador" },
    { label: "Notificar por Email", key: "notificarEmail" },
    { label: "Notificar por WhatsApp", key: "notificarWhatsapp" },
    { label: "Notificar por SMS", key: "notificarSms" },
  ];

  const toggle = (field) => {
    setConfig((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await actualizarConfiguracionCliente(config);

      // Recargar tabla
      if (onSaved) {
        await onSaved();
      }

      // Cerrar modal
      onClose();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Configuración - {cliente.nombre}
          </h3>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">

          {opciones.map((op) => (

            <div
              key={op.key}
              className="flex items-center justify-between border-b pb-3"
            >
              <span className="text-gray-700 font-medium">
                {op.label}
              </span>

              <Switch
                checked={config[op.key]}
                onChange={() => toggle(op.key)}
                className={`${
                  config[op.key] ? "bg-blue-600" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    config[op.key] ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full`}
                />
              </Switch>

            </div>

          ))}

        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Save size={18} /> Guardar
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModalConfiguracionNotificaciones;