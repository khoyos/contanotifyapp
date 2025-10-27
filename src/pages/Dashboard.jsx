import dayjs from "dayjs";
import "dayjs/locale/es";
import { useEffect, useState } from "react";
import { obtenerAlertasCriticas } from "../services/MasterService";
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  AreaChart, Area,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer
} from "recharts";

dayjs.locale("es");



const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#8b5cf6"];

export default function Dashboard() {

  const [loading, setLoading] = useState(false);
  const [alertas, setAlertas] = useState([]);
  //const [alertas, setAlertas] = useState([]);

  const dataBarra = [
    { name: "Dian", value: 24 },
    { name: "Alertas", value: 8 },
    { name: "Impuestos", value: 156 },
    { name: "Mes", value: 12 },
  ];

  const dataPastel = [
    { name: "Por Hacer", value: 24 },
    { name: "Elaboración", value: 8 },
    { name: "pendientes por documentos", value: 156 },
    { name: "Declarado y presentado", value: 12 },
  ];

  const dataLinea = [
    { name: "Clientes", value: 24 },
    { name: "Alertas", value: 8 },
    { name: "Impuestos", value: 156 },
    { name: "Mes", value: 12 },
  ];

  const dataArea = [
    { name: "Clientes", progreso: 24 },
    { name: "Alertas", progreso: 8 },
    { name: "Impuestos", progreso: 156 },
    { name: "Mes", progreso: 12 },
  ];

  const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#8b5cf6"];

  const cargarAlertasCriticas = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const data = await obtenerAlertasCriticas(userId);
      console.log("response alertas", data.alertas);
      setAlertas(data.alertas);
    } catch (error) {
      console.error("Error al cargar obligaciones:", error);
    }
  };

  useEffect(() => {
    cargarAlertasCriticas();
  }, []);


  return (
    <div className="p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* --- GRAFICO DE BARRAS --- */}
        <div className="bg-white rounded-2xl shadow p-4 h-72">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Comparativo por Entidad
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataBarra}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* --- GRAFICO DE LINEAS --- */}
        <div className="bg-white rounded-2xl shadow p-4 h-72">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tendencia de rentas x mes
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataLinea}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* --- GRAFICO DE PASTEL --- */}
        <div className="bg-white rounded-2xl shadow p-4 h-72 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Distribución de Estados
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataPastel}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {dataPastel.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* --- GRAFICO DE AREA --- */}
        <div className="bg-white rounded-2xl shadow p-4 h-72">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Crecimiento progresivo Anual
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataArea}>
              <defs>
                <linearGradient id="colorProgreso" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="progreso"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorProgreso)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- ALERTAS CRÍTICAS --- */}
      <div className="p-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📊 ¡¡¡ Alertas Críticas !!!!
          </h2>

          {/* Urgentes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Urgentes</h3>
            <div className="relative">
              {alertas.filter((a) => a.urgente).length === 0 ? (
                <p className="text-gray-500 italic text-sm px-2">
                  No hay alertas urgentes.
                </p>
              ) : (
                <div className="flex gap-4 overflow-x-auto pb-4 px-1 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent">
                  {alertas
                    .filter((a) => a.urgente)
                    .map((alerta, index) => (
                      <div
                        key={`${alerta.id}-${index}`}
                        className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex-shrink-0 w-72 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-red-800 text-sm">
                            { alerta.mensaje || " " } - {" "}
                            {dayjs(alerta.fechaVencimiento).format(
                              "DD [de] MMMM [de] YYYY"
                            )}
                          </h3>
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                            URGENTE
                          </span>
                        </div>
                        <p className="text-red-700 font-medium">
                          {alerta.nombreCliente}
                        </p>
                        <p className="text-red-600 text-sm">
                          {alerta.obligacionRenta}
                        </p>
                        <p className="text-red-600 text-sm">
                          {alerta.obligacionPago}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Alta prioridad */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">Alta Prioridad</h3>
            <div className="w-full overflow-x-auto">
              {alertas.filter((a) => a.alta).length === 0 ? (
                <p className="text-gray-500 italic text-sm px-2">
                  No hay alertas de alta prioridad.
                </p>
              ) : (
                <div className="flex space-x-4 min-w-full">
                  {alertas
                    .filter((a) => a.alta)
                    .map((alerta, index) => (
                      <div
                        key={index}
                        className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg flex-shrink-0 w-72 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-orange-800 text-sm">
                            Vence en 3 días -{" "}
                            {dayjs(alerta.fechaVencimiento).format(
                              "DD [de] MMMM [de] YYYY"
                            )}
                          </h3>
                          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                            ALTA
                          </span>
                        </div>
                        <p className="text-orange-700 font-medium">
                          {alerta.nombreCliente}
                        </p>
                        <p className="text-orange-600 text-sm">
                          {alerta.obligacionRenta}
                        </p>
                        <p className="text-orange-600 text-sm">
                          {alerta.obligacionPago}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Prioridad media */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-600 mb-2">Prioridad Media</h3>
            <div className="w-full overflow-x-auto">
              {alertas.filter((a) => a.media).length === 0 ? (
                <p className="text-gray-500 italic text-sm px-2">
                  No hay alertas de prioridad media.
                </p>
              ) : (
                <div className="flex space-x-4 min-w-full">
                  {alertas
                    .filter((a) => a.media)
                    .map((alerta, index) => (
                      <div
                        key={index}
                        className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg flex-shrink-0 w-72 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-yellow-800 text-sm">
                            Vence en 5 días -{" "}
                            {dayjs(alerta.fechaVencimiento).format(
                              "DD [de] MMMM [de] YYYY"
                            )}
                          </h3>
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
                            MEDIA
                          </span>
                        </div>
                        <p className="text-yellow-700 font-medium">
                          {alerta.nombreCliente}
                        </p>
                        <p className="text-yellow-600 text-sm">
                          {alerta.obligacionRenta}
                        </p>
                        <p className="text-yellow-600 text-sm">
                          {alerta.obligacionPago}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      </div>
      {/* --- ESTADÍSTICAS --- */}
      <div class="bg-white rounded-lg card-shadow">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 Estadísticas</h2>
        {/* <!-- estadisticas graficas --> */}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg card-shadow">
            <div class="flex items-center">
              <div class="bg-blue-100 p-3 rounded-full">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-2xl font-bold text-gray-900">24</p>
                <p class="text-gray-600 text-sm">Clientes Activos</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg card-shadow">
            <div class="flex items-center">
              <div class="bg-red-100 p-3 rounded-full">
                <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 6.75h.007v.008H12V6.75z" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-2xl font-bold text-gray-900">8</p>
                <p class="text-gray-600 text-sm">Alertas Pendientes</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg card-shadow">
            <div class="flex items-center">
              <div class="bg-green-100 p-3 rounded-full">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-2xl font-bold text-gray-900">156</p>
                <p class="text-gray-600 text-sm">Impuestos al Día</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg card-shadow">
            <div class="flex items-center">
              <div class="bg-purple-100 p-3 rounded-full">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-2xl font-bold text-gray-900">12</p>
                <p class="text-gray-600 text-sm">Este Mes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
