import React, { useState } from "react";

const obligaciones = [
  {
    impuesto: "Renta Grandes Contribuyentes",
    periodo: "Hasta febrero",
    descripcion: "Pago 1a. cuota",
    nit: "Último dígito del NIT",
    fechas: ["11", "12", "13", "14", "17", "18", "19", "20", "21", "24"],
  },
  {
    impuesto: "Renta Personas Jurídicas",
    periodo: "Hasta mayo",
    descripcion: "Declaración y pago 1a. cuota",
    nit: "Último dígito del NIT",
    fechas: ["12", "13", "14", "15", "16", "19", "20", "21", "22", "23"],
  },
  {
    impuesto: "Renta Personas Naturales",
    periodo: "Hasta agosto - octubre",
    descripcion: "Declaración y pago",
    nit: "Último dígito del NIT",
    fechas: ["15", "19", "20", "21", "22", "25", "26", "27", "28", "29"],
  },
  {
    impuesto: "IVA Bimestral",
    periodo: "Hasta marzo",
    descripcion: "Periodo enero-febrero",
    nit: "Último dígito del NIT",
    fechas: ["11", "12", "13", "14", "17", "18", "19", "20", "21", "25"],
  },
  {
    impuesto: "Retención en la Fuente",
    periodo: "Hasta marzo",
    descripcion: "Periodo febrero",
    nit: "Último dígito del NIT",
    fechas: ["11", "12", "13", "14", "17", "18", "19", "20", "21", "25"],
  },
];

const TaxCalendar = () => {
  const [search, setSearch] = useState("");

  const filtered = obligaciones.filter(
    (o) =>
      o.impuesto.toLowerCase().includes(search.toLowerCase()) ||
      o.periodo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-white p-6">
      <div class="bg-white rounded-lg card-shadow">
        <div class="px-6 py-4 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-900">
              📅 Calendario Tributario 2025
            </h3>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impuesto
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Periodo
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ultimo digito del NIT
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Día
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    Renta Grandes Contribuyentes
                  </div>
                  {/* <div class="text-sm text-gray-500">NIT: 900.123.456-7</div> */}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                  Hasta: Febrero
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Pago 1a. cuota
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                  1
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    11
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    Notificar
                  </button>
                  <button class="text-gray-600 hover:text-gray-900">
                    Editar
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    Renta Grandes Contribuyentes
                  </div>
                  {/* <div class="text-sm text-gray-500">NIT: 900.123.456-7</div> */}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                  Hasta: Febrero
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Pago 1a. cuota
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                  1
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    11
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    Notificar
                  </button>
                  <button class="text-gray-600 hover:text-gray-900">
                    Editar
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    Restaurante El Buen Sabor
                  </div>
                  <div class="text-sm text-gray-500">NIT: 800.987.654-3</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  IVA Bimestral
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-medium">
                  18 Dic 2024
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                    3 días
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    Notificar
                  </button>
                  <button class="text-gray-600 hover:text-gray-900">
                    Editar
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    Tienda La Esquina Ltda
                  </div>
                  <div class="text-sm text-gray-500">NIT: 700.456.789-1</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ICA Trimestral
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-medium">
                  22 Dic 2024
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    7 días
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    Notificar
                  </button>
                  <button class="text-gray-600 hover:text-gray-900">
                    Editar
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    Consultores XYZ S.A.S
                  </div>
                  <div class="text-sm text-gray-500">NIT: 900.111.222-4</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Retención en la Fuente
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                  28 Dic 2024
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    13 días
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    Notificar
                  </button>
                  <button class="text-gray-600 hover:text-gray-900">
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">📅 Calendario Tributario 2025</h1>

      {/* Buscador */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por impuesto o periodo..."
          className="w-full md:w-1/3 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-950">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-gray-300">
                Impuesto
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-gray-300">
                Periodo
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-gray-300">
                Descripción
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-gray-300">
                NIT
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-gray-300">
                Fechas
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-400">
                  No se encontraron resultados
                </td>
              </tr>
            ) : (
              filtered.map((o, i) => (
                <tr key={i} className="hover:bg-gray-900">
                  <td className="px-4 py-2">{o.impuesto}</td>
                  <td className="px-4 py-2">{o.periodo}</td>
                  <td className="px-4 py-2">{o.descripcion}</td>
                  <td className="px-4 py-2">{o.nit}</td>
                  <td className="px-4 py-2">{o.fechas.join(", ")}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxCalendar;
