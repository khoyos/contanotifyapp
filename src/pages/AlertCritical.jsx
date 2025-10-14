const AlertCritical = () => {
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

          <div class="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-lg card-shadow">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-sky-800">
                Vence en 7 días - 22 Dic 2024
              </h3>
              <span class="bg-sky-500 text-white px-2 py-1 rounded-full text-xs">
                BAJO
              </span>
            </div>
            <p class="text-sky-700 font-medium">Tienda La Esquina Ltda</p>
            <p class="text-sky-600 text-sm">ICA - Cuarto Trimestre 2024</p>
            <div class="mt-3 flex space-x-2">
              <button class="bg-sky-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Notificar Cliente
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCritical;
