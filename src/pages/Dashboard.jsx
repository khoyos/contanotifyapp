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
import DashboardStats from "../components/Dashboard/DashboardStats";

dayjs.locale("es");



export default function Dashboard() {

  const [alertas, setAlertas] = useState([]);
  const [estadisticas, setEstadisticas] = useState([]);
  const [dataBarra, setDataBarra] = useState([]);
  const [dataLinea, setDataLinea] = useState([]);
  const [dataArea, setDataArea] = useState([]);

  //const [alertas, setAlertas] = useState([]);

  /*const dataBarra = [
    { name: "Ene", DIAN: 24, Alcaldia: 24 },
    { name: "Feb", DIAN: 8, Alcaldia: 8 },
    { name: "Mar", DIAN: 156, Alcaldia: 156 },
    { name: "Abr", DIAN: 12, Alcaldia: 12 },
    { name: "May", DIAN: 12, Alcaldia: 12 },
    { name: "Jun", DIAN: 35, Alcaldia: 35 },
    { name: "Jul", DIAN: 12, Alcaldia: 12 },
    { name: "Ago", DIAN: 12, Alcaldia: 12 },
    { name: "Sep", DIAN: 90, Alcaldia: 24 },
    { name: "Oct", DIAN: 12, Alcaldia: 24 },
    { name: "Nov", DIAN: 100, Alcaldia: 24 },
    { name: "Dic", DIAN: 12, Alcaldia: 24 },
  ];*/

  const dataPastel = [
    { name: "Por Hacer", value: estadisticas.porHacer },
    { name: "Elaboración", value: estadisticas.elaboracion },
    { name: "pendientes por docs.", value: estadisticas.pendientePorDocs },
    { name: "Declarado y presentado", value: estadisticas.declaradoPresentado },
    { name: "Vencidas", value: estadisticas.vencidas },
  ];

  /*/const dataLinea = [
    { name: "Ene", value: 24 },
    { name: "Feb", value: 8 },
    { name: "Mar", value: 156 },
    { name: "Abr", value: 20 },
    { name: "May", value: 35 },
    { name: "Jun", value: 65 },
    { name: "Jul", value: 85 },
    { name: "Ago", value: 12 },
    { name: "Sep", value: 24 },
    { name: "Oct", value: 45 },
    { name: "Nov", value: 120 },
    { name: "Dic", value: 20 }
  ];*/

  /*const dataArea = [
    { name: "Ene 2025", progreso: 24 },
    { name: "Alertas", progreso: 8 },
    { name: "Impuestos", progreso: 156 },
    { name: "Mes", progreso: 12 },
    { name: "Clientes", progreso: 24 },
    { name: "Alertas", progreso: 8 },
    { name: "Impuestos", progreso: 156 },
    { name: "Mes", progreso: 12 },
    { name: "Clientes", progreso: 24 },
    { name: "Alertas", progreso: 8 },
    { name: "Impuestos", progreso: 156 },
    { name: "Mes", progreso: 12 },
  ];*/

  const COLORS = ["#3b82f6", "#e3b65b", "#ef4444", "#22c55e", "#ea899a"];
  //const COLORS_OLD = ["#3b82f6", "#ef4444", "#22c55e", "#8b5cf6", "#fff9c4"];

  const cargarAlertasCriticas = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const data = await obtenerAlertasCriticas(userId);
      console.log("response data.alertas", data.alertas);
      setAlertas(data.alertas);
      setEstadisticas(data.estadisticas);
      setDataLinea(data.clientesConRentaPorMes);
      
      const dataTransformada = transformarDataCorporativo(data.corporativoPorEntidad);
      setDataBarra(dataTransformada);
      setDataArea(data.rentasPorAnios);
      //setDataBarra(data.corporativoPorEntidad)
    } catch (error) {
      console.error("Error al cargar obligaciones:", error);
    }
  };

  const transformarDataCorporativo = (dataA) => {
    if (!dataA || dataA.length === 0) return [];

    // Agrupar por mes y tipo
    const agrupado = Object.values(
      dataA.reduce((acc, { name, value, type }) => {
        if (!acc[name]) acc[name] = { name };
        if (type) acc[name][type] = value;
        return acc;
      }, {})
    );

    // Detectar todas las entidades (DIAN, Alcaldía, etc.)
    const entidades = [...new Set(dataA.map((d) => d.type).filter(Boolean))];

    // Completar con 0 donde falten valores
    const dataCompleta = agrupado.map((item) => {
      entidades.forEach((entidad) => {
        if (item[entidad] === undefined) item[entidad] = 0;
      });
      return item;
    });

    return dataCompleta;
  };

  useEffect(() => {
    cargarAlertasCriticas();
  }, []);


  return (
    <div className="p-4">
      {/* --- ESTADÍSTICAS --- */}
      <div class="bg-white rounded-lg card-shadow">
        <h2 class="text-2xl font-bold text-[#1e1e58] mb-4">📊 Estadísticas</h2>
        {/* <!-- estadisticas graficas --> */}
        <DashboardStats {...estadisticas} />

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* --- GRAFICO DE BARRAS --- */}
        <div className="bg-white rounded-2xl shadow p-4 h-96 flex flex-col items-center justify-center">

          <h2 className="text-2xl font-bold text-[#1e1e58] mb-4">
            Comparativo por Entidad
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataBarra}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {Object.keys(dataBarra[0] || {})
                .filter((key) => key !== "name")
                .map((entidad, i) => (
                  <Bar
                    key={entidad}
                    dataKey={entidad}
                    fill={["#3b82f6", "#22c55e", "#ef4444", "#8b5cf6"][i % 4]}
                    radius={[8, 8, 0, 0]}
                  />
                ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* --- GRAFICO DE LINEAS --- */}
        <div className="bg-white rounded-2xl shadow p-4 h-96 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-[#1e1e58] mb-4">
            Tendencia de rentas x mes
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataLinea}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="clientes" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* --- GRAFICO DE PASTEL --- */}
        <div className="bg-white rounded-2xl shadow p-4 h-96 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-[#1e1e58] mb-4">
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
        <div className="bg-white rounded-2xl shadow p-4 h-96 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-[#1e1e58] mb-4">
            Crecimiento progresivo Anual
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataArea}>
              <defs>
                <linearGradient id="colorProgreso" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="anio" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="rentas"
                stroke="#3b82f6"
                strokeWidth={3} dot={{ r: 5 }}
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
          <h2 className="text-2xl font-bold text-[#1e1e58] mb-4">
            📊  Alertas Críticas
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
                            {alerta.mensaje || " "} - {" "}
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
                            Tu renta vence el -{" "}
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
                            Tu renta vence el -{" "}
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

          {/* Vencidas */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Vencidas</h3>
            <div className="w-full overflow-x-auto">
              {alertas.filter((a) => a.vencida).length === 0 ? (
                <p className="text-gray-500 italic text-sm px-2">
                  No hay Declaraciones Vencidas.
                </p>
              ) : (
                <div className="flex space-x-4 min-w-full">
                  {alertas
                    .filter((a) => a.vencida)
                    .map((alerta, index) => (
                      <div
                        key={index}
                        className="bg-yellow-50 border-l-4 border-blue-500 p-4 rounded-lg flex-shrink-0 w-72 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-yellow-800 text-sm">
                            {alerta.mensaje} - {" Desde el: "}
                            {dayjs(alerta.fechaVencimiento).format(
                              "DD [de] MMMM [de] YYYY"
                            )}
                          </h3>
                          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                            VENCIDA
                          </span>
                        </div>
                        <p className="text-blue-700 font-medium">
                          {alerta.nombreCliente}
                        </p>
                        <p className="text-blue-600 text-sm">
                          {alerta.obligacionRenta}
                        </p>
                        <p className="text-blue-600 text-sm">
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

    </div>
  );
}
