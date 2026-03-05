import { useNavigate } from "react-router-dom";
import UndrawStripePayments from "../../assets/undraw_stripe-payments.svg";
import UndrawSaving from "../../assets/undraw_savings.svg";
import UndrawWorkChat from "../../assets/undraw_work-chat.svg";

export default function Plans() {
  const navigate = useNavigate();

  const selectPlan = (planCode) => {
    navigate("/register", { state: { plan: planCode } });
  };

  const plans = [
    {
      code: "BASIC",
      title: "Prueba Gratis",
      price: "Gratis por 30 días",
      src: UndrawStripePayments,
      features: [
        "Hasta 20 clientes",
        "Email automático",
        "Seguimiento de clientes",
      ],
    },
    {
      code: "PRO",
      title: "Plan Pro",
      price: "29.999 COP / mes",
      src: UndrawSaving,
      features: [
        "Clientes ilimitados",
        "Email + SMS",
        "Soporte prioritario",
      ],
      highlight: true,
    },
    {
      code: "PREMIUM",
      title: "Plan Premium",
      price: "59.999 COP / mes",
      src: UndrawWorkChat,
      features: [
        "Todo Pro",
        "WhatsApp integrado",
        "Asesoría personalizada",
      ],
    },
  ];

  return (
    <section id="planes" className="py-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Transformar tu Práctica Contable?
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Elige el plan ideal para automatizar tus recordatorios y crecer tu
            negocio sin preocupaciones
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center relative
                ${plan.highlight ? "ring-4 ring-[#3b82f6]" : ""}
              `}
            >
              {/* Badge recomendado */}
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-[#3b82f6] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Más Popular
                </span>
              )}

              {/* Imagen */}
              <div className="w-full h-48 flex items-center justify-center mb-6">
                <img
                  src={plan.src}
                  alt={plan.title}
                  className="max-h-44 object-contain"
                />
              </div>

              {/* Info */}
              <h3 className="text-2xl font-semibold text-[#1e1e58] mb-2">
                {plan.title}
              </h3>

              <p className="text-3xl font-bold text-[#1e1e58] mb-6">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="text-[#1e1e58] space-y-2 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => selectPlan(plan.code)}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors
                  ${
                    plan.highlight
                      ? "bg-[#3b82f6] text-white hover:bg-[#1e1e58]"
                      : "bg-[#1e1e58] text-white hover:bg-[#3b82f6]"
                  }
                `}
              >
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
