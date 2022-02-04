import { useUser } from '@/utils/useUser';
import dayjs from 'dayjs';
import React from 'react';

const OverView: any = () => {
  const { user, userDetails, subscription } = useUser();

  const greetingsString = () => {
    const currentHour = dayjs().hour();
    if (currentHour >= 0 && currentHour < 4) {
      return 'Buenas Noches';
    } else if (currentHour >= 4 && currentHour < 12) {
      return 'Buenos días';
    } else if (currentHour >= 12 && currentHour < 20) {
      return 'Buenas tardes';
    } else if (currentHour >= 20 && currentHour < 24) {
      return 'Buenas Noches';
    } else {
      return 'Bienvenido';
    }
  };

  const subscriptionName = subscription && subscription.prices.products.name;

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 shadow mt-4 rounded-md border dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              {/* <!-- Profile --> */}
              <div className="flex items-center">
                {userDetails?.avatar_url ? (
                  <img
                    className="object-cover hidden h-16 w-16 rounded-md sm:block"
                    src={userDetails?.avatar_url}
                    alt=""
                  />
                ) : (
                  <span className="hidden h-16 w-16 rounded-md bg-gray-100 dark:bg-gray-700 sm:block">
                    <svg
                      className="h-full w-full text-gray-300 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}
                <div>
                  <div className="flex items-center">
                    {userDetails?.avatar_url ? (
                      <img
                        className="object-cover h-16 w-16 rounded-md sm:hidden"
                        src={userDetails?.avatar_url}
                        alt=""
                      />
                    ) : (
                      <span className="h-16 w-16 rounded-md sm:hidden bg-gray-100 dark:bg-gray-700">
                        <svg
                          className="h-full w-full text-gray-300 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    )}
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-300 sm:leading-9">
                      {greetingsString()}, {userDetails?.full_name}
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex items-center text-sm text-gray-500 dark:text-gray-300 font-medium sm:mr-6">
                      {/* <!-- Heroicon name: solid/office-building --> */}
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                      {user?.email}
                    </dd>
                    <dt className="sr-only">Account Type</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-300 font-medium sm:mr-6 sm:mt-0 capitalize">
                      {/* <!-- Heroicon name: solid/check-circle --> */}
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      {subscriptionName
                        ? subscriptionName
                        : 'Lets Raise Gratis'}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
            Visión General
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Card --> */}

            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* <!-- Heroicon name: outline/scale --> */}
                    <svg
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                        Días para el ENARM
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                          {'1'}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Card --> */}

            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* <!-- Heroicon name: outline/scale --> */}
                    <svg
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                        Simulaciones Contestadas
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                          10
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Card --> */}

            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* <!-- Heroicon name: outline/scale --> */}
                    <svg
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                        Cuestionarios Contestados
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                          15
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- More items... --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
