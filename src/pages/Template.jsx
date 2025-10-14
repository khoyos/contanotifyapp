
const Template = () => {
  return (
            <div className="p-4">
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
            </div>
   
  )
}

export default Template