import React from "react";

const Demo = () => {
  return (
        <div class="bg-white rounded-lg card-shadow">
            <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-gray-900">📅 Próximos Vencimientos</h3>
                    <div class="flex space-x-2">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                            + Agregar Cliente
                        </button>
                        <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                            Configurar Alertas
                        </button>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impuesto</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Límite</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">Constructora ABC S.A.S</div>
                                <div class="text-sm text-gray-500">NIT: 900.123.456-7</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Impuesto de Renta</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">15 Dic 2024</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Vence HOY</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                <button class="text-blue-600 hover:text-blue-900">Notificar</button>
                                <button class="text-gray-600 hover:text-gray-900">Editar</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">Restaurante El Buen Sabor</div>
                                <div class="text-sm text-gray-500">NIT: 800.987.654-3</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">IVA Bimestral</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-medium">18 Dic 2024</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">3 días</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                <button class="text-blue-600 hover:text-blue-900">Notificar</button>
                                <button class="text-gray-600 hover:text-gray-900">Editar</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">Tienda La Esquina Ltda</div>
                                <div class="text-sm text-gray-500">NIT: 700.456.789-1</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ICA Trimestral</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-medium">22 Dic 2024</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">7 días</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                <button class="text-blue-600 hover:text-blue-900">Notificar</button>
                                <button class="text-gray-600 hover:text-gray-900">Editar</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">Consultores XYZ S.A.S</div>
                                <div class="text-sm text-gray-500">NIT: 900.111.222-4</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Retención en la Fuente</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">28 Dic 2024</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">13 días</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                <button class="text-blue-600 hover:text-blue-900">Notificar</button>
                                <button class="text-gray-600 hover:text-gray-900">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  );
  /*return  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
        </div>*/

  /*return (        <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">🚨 Alertas Críticas</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg card-shadow alert-urgent">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="font-semibold text-red-800">Vence HOY - 15 Dic 2024</h3>
                        <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">URGENTE</span>
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
                        <h3 class="font-semibold text-orange-800">Vence en 3 días - 18 Dic 2024</h3>
                        <span class="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">ALTA</span>
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
                        <h3 class="font-semibold text-yellow-800">Vence en 7 días - 22 Dic 2024</h3>
                        <span class="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">MEDIA</span>
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
        </div>)*/
  /*return (
<div class="space-y-6">
                <div class="bg-white rounded-lg card-shadow">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">📋 Plantillas de Alertas</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="border border-gray-200 rounded-lg p-3">
                            <h4 class="font-medium text-gray-900 mb-2">Conservadora</h4>
                            <p class="text-sm text-gray-600 mb-3">30, 15, 7 y 1 días antes</p>
                            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition-colors">
                                Aplicar Plantilla
                            </button>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-3">
                            <h4 class="font-medium text-gray-900 mb-2">Estándar</h4>
                            <p class="text-sm text-gray-600 mb-3">15, 7 y 1 días antes</p>
                            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition-colors">
                                Aplicar Plantilla
                            </button>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-3">
                            <h4 class="font-medium text-gray-900 mb-2">Mínima</h4>
                            <p class="text-sm text-gray-600 mb-3">7 y 1 días antes</p>
                            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition-colors">
                                Aplicar Plantilla
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg card-shadow">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">📊 Estadísticas</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-600">Alertas Enviadas (Este Mes)</span>
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

                <div class="bg-white rounded-lg card-shadow">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">⚡ Acciones Rápidas</h3>
                    </div>
                    <div class="p-6 space-y-3">
                        <button class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm transition-colors">
                            📤 Enviar Todas las Alertas
                        </button>
                        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition-colors">
                            📋 Exportar Configuración
                        </button>
                        <button class="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded text-sm transition-colors">
                            📥 Importar Clientes
                        </button>
                        <button class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded text-sm transition-colors">
                            🔄 Sincronizar con DIAN
                        </button>
                    </div>
                </div>
            </div>
  );*/
  /*return                 <div class="bg-white rounded-lg card-shadow">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">📋 Plantillas de Alertas</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="border border-gray-200 rounded-lg p-3">
                            <h4 class="font-medium text-gray-900 mb-2">Conservadora</h4>
                            <p class="text-sm text-gray-600 mb-3">30, 15, 7 y 1 días antes</p>
                            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition-colors">
                                Aplicar Plantilla
                            </button>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-3">
                            <h4 class="font-medium text-gray-900 mb-2">Estándar</h4>
                            <p class="text-sm text-gray-600 mb-3">15, 7 y 1 días antes</p>
                            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition-colors">
                                Aplicar Plantilla
                            </button>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-3">
                            <h4 class="font-medium text-gray-900 mb-2">Mínima</h4>
                            <p class="text-sm text-gray-600 mb-3">7 y 1 días antes</p>
                            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition-colors">
                                Aplicar Plantilla
                            </button>
                        </div>
                    </div>
                </div>*/
  /*return (
    <div class="bg-white rounded-lg card-shadow mb-10">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">
          Configuración General de Notificaciones
        </h3>
      </div>
      <div class="p-6 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email del Contador
            </label>
            <input
              type="email"
              value="maria.gonzalez@contabilidad.com"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Teléfono para SMS
            </label>
            <input
              type="tel"
              value="+57 300 123 4567"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div class="border-t pt-6">
          <h4 class="text-md font-medium text-gray-900 mb-4">
            Tipos de Notificación
          </h4>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-gray-900">
                  Notificaciones por Email
                </p>
                <p class="text-sm text-gray-500">
                  Recibir alertas por correo electrónico
                </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-gray-900">
                  📱 Notificaciones por SMS
                </p>
                <p class="text-sm text-gray-500">
                  Recibir alertas por mensaje de texto
                </p>
              </div>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-gray-900">Notificaciones Push</p>
                <p class="text-sm text-gray-500">
                  Alertas en tiempo real en el navegador
                </p>
              </div>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );*/
};

export default Demo;
