import React from 'react'

const PrivacityTerms = ({setShowPrivacy, setAcceptedPrivacy}) => {
    
    return (
        <div className="p-8 md:p-10 w-full custom-max-w max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-xl border mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 border-b pb-2">
                Política de Privacidad y Tratamiento de Datos Personales
            </h2>

            {/* Contenido (Índice) */}
            <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Contenido</h3>
                <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-1">
                    <li>Introducción</li>
                    <li>Datos Generales de Contacto</li>
                    <li>Datos personales recolectados</li>
                    <li>Finalidad del tratamiento de datos</li>
                    <li>Transferencia y uso por terceros</li>
                    <li>Derechos de los titulares</li>
                    <li>Conservación de los datos</li>
                    <li>Seguridad y confidencialidad</li>
                    <li>Modificaciones a la política</li>
                    <li>Aceptación</li>
                </ul>
            </div>

            {/* 1. Introducción */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="introduccion">1. Introducción</h3>
                <p className="text-gray-700 leading-relaxed">
                    En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y las demás normas concordantes sobre protección de datos personales en Colombia, ContaNotify informa a todos sus usuarios, clientes y visitantes la presente Política de Tratamiento de Datos Personales, la cual tiene como objetivo garantizar la **protección de la privacidad** y el derecho al habeas data de todas las personas cuyos datos sean recolectados, almacenados, usados o tratados a través de la aplicación.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                    Este documento contiene la información sobre el tratamiento de datos personales efectuado por **Keila Sandrith Hoyos Pérez (contanotify)**, sea que estos hayan sido suministrados a través de medios de recolección de datos como Aplicación Web, Formularios, redes sociales, canales de atención o ingresado directamente en los servicios de ContaNotify.
                </p>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 2. Datos Generales de Contacto */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="contacto">2. Datos Generales de Contacto</h3>
                <div className="space-y-1 text-gray-700">
                    <p><span className="font-medium text-gray-900">Fecha de entrada en vigencia:</span> 9 de Noviembre de 2025</p>
                    <p><span className="font-medium text-gray-900">Responsable:</span> Keila Hoyos Pérez – Desarrolladora Independiente</p>
                    <p><span className="font-medium text-gray-900">Correo de contacto:</span> <a href="mailto:keilahoyosp@gmail.com" className="text-blue-600 hover:text-blue-800 underline">keilahoyosp@gmail.com</a></p>
                    <p><span className="font-medium text-gray-900">País de operación:</span> Colombia</p>
                </div>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 3. Datos personales recolectados */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="datos">3. Datos personales recolectados</h3>
                <p className="text-gray-700 mb-3">
                    ContaNotify podrá solicitar y almacenar los siguientes datos personales de sus usuarios:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Número de identificación o NIT</li>
                    <li>Teléfono o celular</li>
                    <li>Nombre de empresa o cliente</li>
                    <li>Información de acceso (**usuario y contraseña cifrada**)</li>
                </ul>
                <blockquote className="mt-4 p-3 border-l-4 border-yellow-500 bg-yellow-50 text-sm text-yellow-800 rounded">
                    ⚠️ **Importante:** No se recolectan datos contables, financieros o sensibles.
                </blockquote>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 4. Finalidad del tratamiento de datos */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="finalidad">4. Finalidad del tratamiento de datos</h3>
                <p className="text-gray-700 mb-3">
                    Los datos personales son recolectados, almacenados, utilizados y tratados con las siguientes finalidades:
                </p>
                <ul className="list-decimal list-inside ml-4 text-gray-700 space-y-2">
                    <li>Permitir el **registro, acceso y uso** de la aplicación ContaNotify.</li>
                    <li>Enviar **notificaciones y recordatorios** asociados a servicios contables o administrativos.</li>
                    <li>Facilitar la **comunicación** entre la desarrolladora y el usuario.</li>
                    <li>Gestionar solicitudes de **soporte técnico o consultas**.</li>
                    <li>**Mejorar la experiencia** del usuario dentro de la plataforma.</li>
                    <li>Cumplir con **obligaciones legales o contractuales** derivadas del uso de la aplicación.</li>
                </ul>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 5. Transferencia y uso por terceros */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="terceros">5. Transferencia y uso por terceros</h3>
                <p className="text-gray-700 leading-relaxed">
                    ContaNotify podrá utilizar servicios de terceros para el alojamiento, procesamiento o envío de información (por ejemplo, proveedores de servicios en la nube o correo electrónico), tales como **Google Cloud, AWS o servicios similares**. En dichos casos, se garantizará que los terceros cumplan con **estándares adecuados de seguridad y confidencialidad** de la información.
                </p>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 6. Derechos de los titulares */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="derechos">6. Derechos de los titulares</h3>
                <p className="text-gray-700 mb-3">
                    El titular de los datos personales tiene derecho a:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                    <li>Conocer, actualizar y rectificar sus datos personales.</li>
                    <li>Solicitar prueba de la autorización otorgada para su tratamiento.</li>
                    <li>Ser informado sobre el uso que se da a sus datos.</li>
                    <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.</li>
                    <li>Revocar la autorización y/o solicitar la supresión de sus datos cuando no se respeten los principios, derechos y garantías legales.</li>
                </ul>
                <p className="text-gray-700 mt-3">
                    Las solicitudes relacionadas con estos derechos podrán realizarse enviando un correo electrónico a <a href="mailto:keilahoyosp@gmail.com" className="text-blue-600 hover:text-blue-800 underline font-medium">keilahoyosp@gmail.com</a>.
                </p>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 7. Conservación de los datos */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="conservacion">7. Conservación de los datos</h3>
                <p className="text-gray-700 leading-relaxed">
                    Los datos personales serán conservados únicamente mientras el usuario mantenga su **cuenta activa** en ContaNotify. Una vez eliminada la cuenta, los datos serán **suprimidos o anonimizados de forma segura**, salvo cuando sea necesario conservarlos para el cumplimiento de obligaciones legales.
                </p>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 8. Seguridad y confidencialidad */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="seguridad">8. Seguridad y confidencialidad</h3>
                <p className="text-gray-700 leading-relaxed">
                    ContaNotify adopta medidas **técnicas, administrativas y organizativas razonables** para proteger los datos personales contra pérdida, acceso no autorizado, alteración, divulgación o destrucción. El acceso a la información personal se limita a las personas autorizadas por la desarrolladora.
                </p>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 9. Modificaciones a la política */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="modificaciones">9. Modificaciones a la política</h3>
                <p className="text-gray-700 leading-relaxed">
                    La desarrolladora Keila Hoyos Pérez se reserva el derecho de **modificar esta política en cualquier momento**. Cualquier cambio será **publicado en los canales oficiales** de ContaNotify y entrará en vigor desde su publicación.
                </p>
            </section>

            <hr className="my-6 border-gray-200" />

            {/* 10. Aceptación */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3" id="aceptacion">10. Aceptación</h3>
                <p className="text-gray-700 leading-relaxed font-bold">
                    El uso de la aplicación ContaNotify implica la **aceptación expresa** de esta Política de Tratamiento de Datos Personales por parte del usuario.
                </p>
            </section>

            {/* Botón de cierre o aceptación (depende de tu lógica) */}
            {/* Ejemplo: <button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 mt-4">Entendido y Acepto</button> */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setAcceptedPrivacy(true);
                  setShowPrivacy(false);
                }}
                className="px-4 py-2 bg-[#1e1e58] text-white rounded-md hover:bg-blue-600 transition"
              >
                Aceptar
              </button>
            </div>
        </div>
    )
}

export default PrivacityTerms