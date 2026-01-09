import { Link } from "react-router-dom";
import LogoContaNotify from "../assets/logo_contanotify_v4.svg";
import UndrawStripePayments from "../assets/undraw_stripe-payments.svg";
import UndrawSaving from "../assets/undraw_savings.svg";
import UndrawWorkChat from "../assets/undraw_work-chat.svg";
import UndrawBusinessChat from "../assets/undraw_business-chat.svg";
import UndrawFollowing from "../assets/undraw_following.svg";
import UndrawNotify from "../assets/undraw_notify.svg";
import UndrawTimeManagement from "../assets/undraw_time-management.svg";
import { FaCheck } from "react-icons/fa";
import Plan from "../components/Plan/Plan";

export default function Landing() {
  return (
    <body class="bg-white">
      {/* <!-- Header --> */}
      <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            <div class="flex items-center space-x-2">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={LogoContaNotify} alt="Logo de ContaNotify" />
              </div>
              <span class="text-xl font-bold text-[#1e1e58]">ContaNotify</span>
            </div>
            <nav class="hidden md:flex space-x-8">
              <a
                href="#beneficios"
                class="text-[#1e1e58] hover:text-primary-blue transition-colors font-semibold"
              >
                Beneficios
              </a>
              <a
                href="#como-funciona"
                class="text-[#1e1e58] hover:text-primary-blue transition-colors font-semibold"
              >
                Cómo Funciona
              </a>
              <a
                href="#testimonios"
                class="text-[#1e1e58] hover:text-primary-blue transition-colors font-semibold"
              >
                Testimonios
              </a>
            </nav>
            {/* <button class="bg-accent-green text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Iniciar Sesión
            </button> */}
            <Link
              to="/login"
              className="bg-[#1e1e58] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3b82f6] transition-colors"
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
                Nunca más olvides una fecha importante con{" "}
                <span>ContaNotify</span>
              </h1>
              <p class="text-xl mb-8 text-blue-100">
                La herramienta que todo contador público en Colombia necesita.
                Envía recordatorios automáticos por email, SMS y WhatsApp para
                cumplir todas tus obligaciones tributarias a tiempo.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="bg-[#1e1e58] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82f6] transition-colors shadow-lg">
                  Probar Gratis 30 Días
                </button>
                <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors">
                  Solicitar Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                {/* Contenedor principal en flex */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  {/* Sección izquierda: texto e íconos */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mr-4 text-white text-xl">
                        <FaCheck />
                      </div>
                      <div>
                        <h3 className="text-[#1e1e58] font-semibold text-lg">
                          Recordatorio Enviado
                        </h3>
                        <p className="text-[#1e1e58] text-sm">
                          Declaración de Renta - Vence en 3 días
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-[#1e1e58]">
                        <span className="w-2 h-2 bg-[#1e1e58] rounded-full mr-3"></span>
                        Email enviado a cliente@empresa.com
                      </div>
                      <div className="flex items-center text-sm text-[#1e1e58]">
                        <span className="w-2 h-2 bg-[#1e1e58] rounded-full mr-3"></span>
                        SMS enviado a +57 300 123 4567
                      </div>
                      <div className="flex items-center text-sm text-[#1e1e58]">
                        <span className="w-2 h-2 bg-[#1e1e58] rounded-full mr-3"></span>
                        WhatsApp enviado exitosamente
                      </div>
                    </div>
                  </div>

                  {/* Sección derecha: imagen */}
                  <div className="flex-shrink-0 w-full lg:w-1/3 flex items-center justify-center">
                    <img
                      src={UndrawTimeManagement}
                      alt="UndrawTimeManagement"
                      className="max-h-40 object-contain"
                    />
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
            <h2 class="text-3xl lg:text-4xl font-bold text-[#1e1e58] mb-4">
              Beneficios que Transformarán tu Práctica Contable
            </h2>
            <p class="text-xl text-[#1e1e58] max-w-3xl mx-auto">
              Optimiza tu tiempo, mejora la comunicación con tus clientes y
              nunca más pierdas una fecha importante
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: UndrawStripePayments,
                title: "Cumplimiento Garantizado",
                text: "Nunca más olvides fechas de declaraciones, pagos de impuestos o vencimientos. Mantén a tus clientes siempre al día con sus obligaciones tributarias.",
              },
              {
                src: UndrawSaving,
                title: "Ahorro de Tiempo",
                text: "Elimina las llamadas y emails manuales. Automatiza todos tus recordatorios y dedica más tiempo a actividades que generen valor para tu negocio.",
              },
              {
                src: UndrawWorkChat,
                title: "Comunicación Multicanal",
                text: "Llega a tus clientes por email, SMS y WhatsApp. Asegúrate de que reciban tus mensajes en el canal que más usan y prefieren.",
              },
              {
                src: UndrawBusinessChat,
                title: "Mejora tu Reputación",
                text: "Demuestra profesionalismo y organización. Tus clientes valorarán tu proactividad y atención al detalle en el manejo de sus obligaciones.",
              },
              {
                src: UndrawFollowing,
                title: "Gestión de Múltiples Clientes",
                text: "Administra las fechas importantes de todos tus clientes desde una sola plataforma. Organiza y controla todo de manera centralizada.",
              },
              {
                src: UndrawNotify,
                title: "Evita Sanciones",
                text: "Protege a tus clientes de multas y sanciones por incumplimiento. Los recordatorios oportunos previenen costosos errores administrativos.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg card-hover flex flex-col items-center text-center"
              >
                {/* Contenedor uniforme de imagen */}
                <div className="w-full h-48 flex items-center justify-center mb-6">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="max-h-44 object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-dark-gray mb-4">
                  {item.title}
                </h3>
                <p className="text-[#1e1e58]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Cómo Funciona Section --> */}
      <section id="como-funciona" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-[#1e1e58] mb-4">
              Cómo Funciona ContaNotify
            </h2>
            <p class="text-xl text-[#1e1e58] max-w-3xl mx-auto">
              En solo 3 pasos simples, tendrás tu sistema de notificaciones
              automáticas funcionando
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-secondary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">1</span>
              </div>
              <h3 class="text-xl font-semibold text-[#1e1e58] mb-4">
                Configura Clientes
              </h3>
              <p class="text-[#1e1e58] mb-6">
                Ingresa las fechas importantes de tus clientes: declaraciones,
                pagos de impuestos, vencimientos de documentos y más.
              </p>
              <div class="bg-light-gray p-4 rounded-lg">
                <svg
                  class="w-16 h-16 text-secondary-blue mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-secondary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">2</span>
              </div>
              <h3 class="text-xl font-semibold text-[#1e1e58] mb-4">
                Personaliza Obligaciones
              </h3>
              <p class="text-[#1e1e58] mb-6">
                Crea mensajes personalizados para cada tipo de recordatorio.
                Define cuándo y cómo quieres que se envíen las notificaciones.
              </p>
              <div class="bg-light-gray p-4 rounded-lg">
                <svg
                  class="w-16 h-16 text-secondary-blue mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-secondary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">3</span>
              </div>
              <h3 class="text-xl font-semibold text-[#1e1e58] mb-4">
                Automatiza y Relájate
              </h3>
              <p class="text-[#1e1e58] mb-6">
                ContaNotify se encarga del resto. Los recordatorios se envían
                automáticamente por email, SMS y WhatsApp en las fechas
                programadas.
              </p>
              <div class="bg-light-gray p-4 rounded-lg">
                <svg
                  class="w-16 h-16 text-secondary-blue mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
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
            <h2 class="text-3xl lg:text-4xl font-bold text-[#1e1e58] mb-4">
              Lo que Dicen los Contadores en Colombia
            </h2>
            <p class="text-xl text-[#1e1e58]">
              Más de 500 contadores públicos ya confían en ContaNotify
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-semibold">MC</span>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray">
                    María Camila Rodríguez
                  </h4>
                  <p class="text-sm text-[#1e1e58]">CP - Bogotá</p>
                </div>
              </div>
              <p class="text-[#1e1e58] mb-4">
                "ContaNotify ha revolucionado mi práctica contable. Mis clientes
                ahora me ven como más profesional y organizada. Ya no tengo que
                preocuparme por recordar fechas importantes."
              </p>
              <div class="flex text-yellow-400">★★★★★</div>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-semibold">JM</span>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray">Jorge Martínez</h4>
                  <p class="text-sm text-[#1e1e58]">CP - Medellín</p>
                </div>
              </div>
              <p class="text-[#1e1e58] mb-4">
                "Desde que uso ContaNotify, ninguno de mis clientes ha tenido
                sanciones por incumplimiento. La herramienta es intuitiva y me
                ahorra horas de trabajo cada semana."
              </p>
              <div class="flex text-yellow-400">★★★★★</div>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-semibold">AP</span>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray">
                    Ana Patricia Gómez
                  </h4>
                  <p class="text-sm text-[#1e1e58]">CP - Cali</p>
                </div>
              </div>
              <p class="text-[#1e1e58] mb-4">
                "La función de WhatsApp es increíble. Mis clientes responden más
                rápido y se sienten más conectados. ContaNotify me ha ayudado a
                crecer mi cartera de clientes."
              </p>
              <div class="flex text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Final Section --> */}
      {/* <section class="py-20 gradient-bg text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Práctica Contable?
          </h2>
          <p class="text-xl mb-8 text-blue-100">
            Únete a más de 500 contadores públicos en Colombia que ya están
            usando ContaNotify para mejorar su productividad y la satisfacción
            de sus clientes.
          </p>

          <div class="bg-white rounded-2xl p-8 mb-8 text-dark-gray">
            <h3 class="text-2xl font-semibold mb-4">
              Prueba Gratuita de 30 Días
            </h3>
            <div class="grid md:grid-cols-3 gap-6 mb-6">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-[#1e1e58] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Sin tarjeta de crédito</span>
              </div>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-[#1e1e58] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Configuración gratuita</span>
              </div>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-[#1e1e58] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Soporte incluido</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-[#1e1e58] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82f6] transition-colors shadow-lg">
              Comenzar Prueba Gratuita
            </button>
            <button class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors">
              Agendar Demo Personalizada
            </button>
          </div>
          <p class="text-sm mt-6 font-semibold">
            ¿Tienes preguntas? Contáctanos al +57 (1) 234-5678 o
            info@contanotify.com
          </p>
        </div>
      </section> */}

      <section>
        <Plan/>
      </section>      

      {/* <!-- Footer --> */}
      <footer class="bg-[#1e1e58] text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                  <img src={LogoContaNotify} alt="Logo de ContaNotify" />
                </div>
                <span class="text-lg font-bold">ContaNotify</span>
              </div>
              <p class="text-white">
                La herramienta de notificaciones automáticas diseñada
                especialmente para contadores públicos en Colombia.
              </p>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Producto</h4>
              <ul class="space-y-2 text-white">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Integraciones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Soporte</h4>
              <ul class="space-y-2 text-white">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Tutoriales
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Contacto</h4>
              <ul class="space-y-2 text-white">
                <li>+57 (1) 234-5678</li>
                <li>info@contanotify.com</li>
                <li>Cartagena, Colombia</li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-600 mt-8 pt-8 text-center text-white">
            <p>&copy; 2025 ContaNotify. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}
