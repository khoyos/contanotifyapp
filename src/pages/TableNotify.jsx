
const TableNotify = () => {
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
  )
}

export default TableNotify