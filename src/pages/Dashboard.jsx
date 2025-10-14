export default function Dashboard() {
  return (
    <div className="p-4">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          🚨 Alertas Críticas
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg card-shadow alert-urgent">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-red-800">
                Vence HOY - 15 Dic 2024
              </h3>
              <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                URGENTE
              </span>
            </div>
            <p class="text-red-700 font-medium">Constructora ABC S.A.S</p>
            <p class="text-red-600 text-sm">Impuesto de Renta - Período 2024</p>
            <div class="mt-3 flex space-x-2">
              <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Notificar Cliente
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg card-shadow">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-orange-800">
                Vence en 3 días - 18 Dic 2024
              </h3>
              <span class="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                ALTA
              </span>
            </div>
            <p class="text-orange-700 font-medium">Restaurante El Buen Sabor</p>
            <p class="text-orange-600 text-sm">IVA Bimestral - Nov-Dec 2024</p>
            <div class="mt-3 flex space-x-2">
              <button class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Notificar Cliente
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg card-shadow">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-yellow-800">
                Vence en 7 días - 22 Dic 2024
              </h3>
              <span class="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
                MEDIA
              </span>
            </div>
            <p class="text-yellow-700 font-medium">Tienda La Esquina Ltda</p>
            <p class="text-yellow-600 text-sm">ICA - Cuarto Trimestre 2024</p>
            <div class="mt-3 flex space-x-2">
              <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Notificar Cliente
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>



      <div class="bg-white rounded-lg card-shadow">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 Estadísticas</h2>
              {/* <!-- estadisticas graficas --> */}
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg card-shadow">
                <div class="flex items-center">
                    <div class="bg-blue-100 p-3 rounded-full">
                        <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 6.75h.007v.008H12V6.75z"/>
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
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-2xl font-bold text-gray-900">12</p>
                        <p class="text-gray-600 text-sm">Este Mes</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">
              Alertas Enviadas (Este Mes)
            </span>
            <span class="font-semibold text-gray-900">47</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Tasa de Respuesta</span>
            <span class="font-semibold text-green-600">85%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Clientes Activos</span>
            <span class="font-semibold text-gray-900">24</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Próximos Vencimientos</span>
            <span class="font-semibold text-orange-600">8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
