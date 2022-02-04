import { FunctionComponent } from 'react';

const Feature: FunctionComponent = () => {
  return (
    <div className="relative py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">
            Estudia Inteligente
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            Una mejor manera para prepararte para el ENARM
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Nos comprometimos para crear el simulador que será tu compañero,
            además de nuevas características como
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Cuestionarios actualizados
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Seguimos actualizando año con año, así que no tienes que
                  preocuparte por preguntas viejas, siempre agregando nuevos
                  cuestionarios y escuchando a nuestros usuarios para seguir
                  dando la mejor experiencia
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Pagos mensuales, cancela en cualquier momento
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Tenemos un sistema de facturación fácil, así que puedes
                  cancelar en cualquier momento
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Estudiar en tu PC, tableta o móvil desde el navegador sin
                  problemas
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Es posible porque puedes utilizar la versión para PC desde tu
                  navegador, o desde tu dispositivo móvil o tableta sin
                  problemas, tú eliges en donde estudiar!
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Nuevas herramientas de estudio
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Vamos mejorando para ti, además del simulador del ENARM
                  tenemos cuestionarios con explicaciones de casos clīnicos,
                  tarjetas de estudio por tópicos que puedes guardar, además
                  puedes ver tus estadísticas y compararlas con otros médicos
                  desde la plataforma.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
