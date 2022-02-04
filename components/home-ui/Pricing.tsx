import { useRouter } from 'next/router';
import React from 'react';

const Pricing = () => {
  const router = useRouter();
  return (
    <div className="mx-auto pt-24 px-12 lg:px-28 py-12 bg-gray-50 dark:bg-gray-800">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center dark:text-gray-200">
          Planes
        </h1>
        <p className="mt-5 text-xl text-gray-500 sm:text-center">
          Comienza gratis, pero puedes añadir características especiales
        </p>
      </div>
      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700">
          <div className="p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
              Lets Raise Free
            </h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
              Prueba lo básico de Lets Raise
            </p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-200">
                $0
              </span>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                /mes
              </span>
            </p>
            <button
              onClick={() => router.push('/signup')}
              className="mt-8 block w-full bg-green-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-green-700"
            >
              Empieza con Lets Raise Free
            </button>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase dark:text-gray-200">
              Que Incluye
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex space-x-3">
                {/* <!-- Heroicon name: solid/check --> */}
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Simulacion diaria con preguntas aleatorias
                </span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Heroicon name: solid/check --> */}
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Cuestionario diario con preguntas aleatorias
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700">
          <div className="p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
              Lets Raise Premium
            </h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
              Quieres la experiencia completa de Lets Raise
            </p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-200">
                $99
              </span>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                /mes
              </span>
            </p>
            <button
              onClick={() => router.push('/signup')}
              className="mt-8 block w-full bg-green-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-green-700"
            >
              Compra Lets Raise Premium
            </button>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase dark:text-gray-200">
              Que Incluye
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex space-x-3">
                {/* <!-- Heroicon name: solid/check --> */}
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Todas las simulaciones y cuestionarios de Lets Raise
                </span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Heroicon name: solid/check --> */}
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Estadísticas
                </span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Heroicon name: solid/check --> */}
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Continuas actualizaciones de contenido y herramientas
                </span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Heroicon name: solid/check --> */}
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Soporte personalizado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
