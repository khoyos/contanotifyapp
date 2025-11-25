import React from "react";

export default function TermsConditions({
    lastUpdated = "2025-11-24",
    contactEmail = "soporte@contanotify.com",
    companyName = "Contanotify",
    setShowTerms,
    setAcceptedTerms
}) {
    return (
      <div className="p-8 md:p-10 w-full custom-max-w max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-xl border mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 border-b pb-2">
        Términos y Condiciones de Uso – ContaNotify
      </h2>

      {/* Contenido (Índice) */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold text-blue-700 mb-2">Contenido</h3>
        <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-1">
          <li>Definiciones</li>
          <li>Objetivo del servicio</li>
          <li>Condiciones de uso</li>
          <li>Registro y cuentas</li>
          <li>Obligaciones del usuario</li>
          <li>Limitación de responsabilidad</li>
          <li>Propiedad intelectual</li>
          <li>Suspensión o terminación del servicio</li>
          <li>Modificaciones</li>
          <li>Aceptación</li>
        </ul>
      </div>

      {/* 1. Definiciones */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          1. Definiciones
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Para los efectos de estos Términos y Condiciones, se entenderá como
          “Usuario” a toda persona que acceda, utilice o se registre en la
          aplicación web ContaNotify. “Desarrolladora” se refiere a Keila
          Sandrith Hoyos Pérez, creadora y administradora de la plataforma.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 2. Objetivo del servicio */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          2. Objetivo del servicio
        </h3>
        <p className="text-gray-700 leading-relaxed">
          ContaNotify es una herramienta digital cuyo propósito es notificar a
          contadores, empresas o usuarios registrados sobre **fechas de pagos
          tributarios y recordatorios administrativos**, con el fin de facilitar
          su cumplimiento oportuno.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 3. Condiciones de uso */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          3. Condiciones de uso
        </h3>
        <p className="text-gray-700 leading-relaxed">
          El uso de la plataforma implica que el Usuario se compromete a no
          emplear la aplicación para actividades fraudulentas, ilícitas o que
          afecten el funcionamiento adecuado de ContaNotify.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 4. Registro y cuentas */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          4. Registro y cuentas
        </h3>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Para acceder a las funciones de notificación, el Usuario debe crear
          una cuenta proporcionando datos veraces. El manejo de la
          información personal se realiza conforme a la Política de Privacidad
          vigente.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Cada Usuario es responsable de mantener la confidencialidad de sus
          credenciales.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 5. Obligaciones del usuario */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          5. Obligaciones del usuario
        </h3>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>Usar la plataforma de forma lícita y adecuada.</li>
          <li>Proveer información verídica y actualizada.</li>
          <li>No intentar vulnerar la seguridad o estabilidad del sistema.</li>
          <li>No compartir sus credenciales con terceros.</li>
        </ul>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 6. Limitación de responsabilidad */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          6. Limitación de responsabilidad
        </h3>
        <p className="text-gray-700 leading-relaxed">
          ContaNotify ofrece recordatorios y notificaciones, pero **no garantiza
          el cumplimiento** de las obligaciones tributarias por parte del
          Usuario. La responsabilidad final sobre el pago oportuno recae en el
          Usuario.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 7. Propiedad intelectual */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          7. Propiedad intelectual
        </h3>
        <p className="text-gray-700 leading-relaxed">
          El diseño, código, marca, textos y contenido de ContaNotify son
          propiedad exclusiva de la desarrolladora y están protegidos por normas
          de propiedad intelectual.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 8. Suspensión o terminación */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          8. Suspensión o terminación del servicio
        </h3>
        <p className="text-gray-700 leading-relaxed">
          La desarrolladora podrá suspender o cancelar cuentas que incumplan
          estos términos, afecten la operación del sistema o usen la plataforma
          de manera indebida.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 9. Modificaciones */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          9. Modificaciones
        </h3>
        <p className="text-gray-700 leading-relaxed">
          La desarrolladora podrá modificar estos Términos y Condiciones en
          cualquier momento. Los cambios serán publicados en los canales
          oficiales de ContaNotify.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* 10. Aceptación */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          10. Aceptación
        </h3>
        <p className="text-gray-700 leading-relaxed font-bold">
          El uso de la plataforma implica la **aceptación total** de estos
          Términos y Condiciones por parte del Usuario.
        </p>
      </section>

      {/* Botones */}
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => setShowTerms(false)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            setAcceptedTerms(true);
            setShowTerms(false);
          }}
          className="px-4 py-2 bg-[#1e1e58] text-white rounded-md hover:bg-blue-600 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
    );
}
