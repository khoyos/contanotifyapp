const GeneralNotificationSettings = () => {
  return (
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
                <p class="font-medium text-gray-900">Notificaciones por SMS</p>
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
  );
};

export default GeneralNotificationSettings;
