import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <body class="bg-white">
      {/* <!-- Header --> */}
      <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            <div class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span class="text-xl font-bold text-dark-gray">ContaNotify</span>
            </div>
            <nav class="hidden md:flex space-x-8">
              <a href="#beneficios" class="text-dark-gray hover:text-primary-blue transition-colors">Beneficios</a>
              <a href="#como-funciona" class="text-dark-gray hover:text-primary-blue transition-colors">Cómo Funciona</a>
              <a href="#testimonios" class="text-dark-gray hover:text-primary-blue transition-colors">Testimonios</a>
            </nav>
            {/* <button class="bg-accent-green text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Iniciar Sesión
            </button> */}
            <Link to="/login" className="bg-accent-green text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </header>

      {/* <!-- Hero Section --> */}
      <section class="gradient-bg text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Nunca más olvides una fecha importante con
                <span class="text-yellow-300">ContaNotify</span>
              </h1>
              <p class="text-xl mb-8 text-blue-100">
                La herramienta que todo contador público en Colombia necesita. Envía recordatorios automáticos por email, SMS y WhatsApp para cumplir todas tus obligaciones tributarias a tiempo.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="bg-accent-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg">
                  Probar Gratis 30 Días
                </button>
                <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors">
                  Solicitar Demo
                </button>
              </div>
            </div>
            <div class="relative">
              <div class="bg-white rounded-2xl p-8 shadow-2xl">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-dark-gray font-semibold">Recordatorio Enviado</h3>
                    <p class="text-gray-500 text-sm">Declaración de Renta - Vence en 3 días</p>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center text-sm text-gray-600">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Email enviado a cliente@empresa.com
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    SMS enviado a +57 300 123 4567
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    WhatsApp enviado exitosamente
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Beneficios Section --> */}
      <section id="beneficios" class="py-20 bg-light-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
              Beneficios que Transformarán tu Práctica Contable
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimiza tu tiempo, mejora la comunicación con tus clientes y nunca más pierdas una fecha importante
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div class="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Cumplimiento Garantizado</h3>
              <p class="text-gray-600">
                Nunca más olvides fechas de declaraciones, pagos de impuestos o vencimientos. Mantén a tus clientes siempre al día con sus obligaciones tributarias.
              </p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div class="w-16 h-16 bg-accent-green rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Ahorro de Tiempo</h3>
              <p class="text-gray-600">
                Elimina las llamadas y emails manuales. Automatiza todos tus recordatorios y dedica más tiempo a actividades que generen valor para tu negocio.
              </p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div class="w-16 h-16 bg-secondary-blue rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Comunicación Multicanal</h3>
              <p class="text-gray-600">
                Llega a tus clientes por email, SMS y WhatsApp. Asegúrate de que reciban tus mensajes en el canal que más usan y prefieren.
              </p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div class="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Mejora tu Reputación</h3>
              <p class="text-gray-600">
                Demuestra profesionalismo y organización. Tus clientes valorarán tu proactividad y atención al detalle en el manejo de sus obligaciones.
              </p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Gestión de Múltiples Clientes</h3>
              <p class="text-gray-600">
                Administra las fechas importantes de todos tus clientes desde una sola plataforma. Organiza y controla todo de manera centralizada.
              </p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div class="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Evita Sanciones</h3>
              <p class="text-gray-600">
                Protege a tus clientes de multas y sanciones por incumplimiento. Los recordatorios oportunos previenen costosos errores administrativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Cómo Funciona Section --> */}
      <section id="como-funciona" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
              Cómo Funciona ContaNotify
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              En solo 3 pasos simples, tendrás tu sistema de notificaciones automáticas funcionando
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">1</span>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Configura Clientes</h3>
              <p class="text-gray-600 mb-6">
                Ingresa las fechas importantes de tus clientes: declaraciones, pagos de impuestos, vencimientos de documentos y más.
              </p>
              <div class="bg-light-gray p-4 rounded-lg">
                <svg class="w-16 h-16 text-primary-blue mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">2</span>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Personaliza Obligaciones</h3>
              <p class="text-gray-600 mb-6">
                Crea mensajes personalizados para cada tipo de recordatorio. Define cuándo y cómo quieres que se envíen las notificaciones.
              </p>
              <div class="bg-light-gray p-4 rounded-lg">
                <svg class="w-16 h-16 text-accent-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-secondary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">3</span>
              </div>
              <h3 class="text-xl font-semibold text-dark-gray mb-4">Automatiza y Relájate</h3>
              <p class="text-gray-600 mb-6">
                ContaNotify se encarga del resto. Los recordatorios se envían automáticamente por email, SMS y WhatsApp en las fechas programadas.
              </p>
              <div class="bg-light-gray p-4 rounded-lg">
                <svg class="w-16 h-16 text-secondary-blue mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonios Section --> */}
      <section id="testimonios" class="py-20 bg-light-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
              Lo que Dicen los Contadores en Colombia
            </h2>
            <p class="text-xl text-gray-600">
              Más de 500 contadores públicos ya confían en ContaNotify
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-semibold">MC</span>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray">María Camila Rodríguez</h4>
                  <p class="text-sm text-gray-500">CP - Bogotá</p>
                </div>
              </div>
              <p class="text-gray-600 mb-4">
                "ContaNotify ha revolucionado mi práctica contable. Mis clientes ahora me ven como más profesional y organizada. Ya no tengo que preocuparme por recordar fechas importantes."
              </p>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-semibold">JM</span>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray">Jorge Martínez</h4>
                  <p class="text-sm text-gray-500">CP - Medellín</p>
                </div>
              </div>
              <p class="text-gray-600 mb-4">
                "Desde que uso ContaNotify, ninguno de mis clientes ha tenido sanciones por incumplimiento. La herramienta es intuitiva y me ahorra horas de trabajo cada semana."
              </p>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-semibold">AP</span>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray">Ana Patricia Gómez</h4>
                  <p class="text-sm text-gray-500">CP - Cali</p>
                </div>
              </div>
              <p class="text-gray-600 mb-4">
                "La función de WhatsApp es increíble. Mis clientes responden más rápido y se sienten más conectados. ContaNotify me ha ayudado a crecer mi cartera de clientes."
              </p>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Final Section --> */}
      <section class="py-20 gradient-bg text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Práctica Contable?
          </h2>
          <p class="text-xl mb-8 text-blue-100">
            Únete a más de 500 contadores públicos en Colombia que ya están usando ContaNotify para mejorar su productividad y la satisfacción de sus clientes.
          </p>

          <div class="bg-white rounded-2xl p-8 mb-8 text-dark-gray">
            <h3 class="text-2xl font-semibold mb-4">Prueba Gratuita de 30 Días</h3>
            <div class="grid md:grid-cols-3 gap-6 mb-6">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Sin tarjeta de crédito</span>
              </div>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Configuración gratuita</span>
              </div>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Soporte incluido</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-accent-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg">
              Comenzar Prueba Gratuita
            </button>
            <button class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors">
              Agendar Demo Personalizada
            </button>
          </div>

          <p class="text-sm text-blue-200 mt-6">
            ¿Tienes preguntas? Contáctanos al +57 (1) 234-5678 o info@contanotify.com
          </p>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer class="bg-dark-gray text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span class="text-lg font-bold">ContaNotify</span>
              </div>
              <p class="text-gray-400">
                La herramienta de notificaciones automáticas diseñada especialmente para contadores públicos en Colombia.
              </p>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Producto</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Integraciones</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Soporte</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Tutoriales</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Contacto</h4>
              <ul class="space-y-2 text-gray-400">
                <li>+57 (1) 234-5678</li>
                <li>info@contanotify.com</li>
                <li>Cartagena, Colombia</li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ContaNotify. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}
