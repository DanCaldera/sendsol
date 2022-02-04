import ThemeToggle from '@/components/ThemeToggle';
import { useUser } from '@/utils/useUser';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import router from 'next/router';
import { Fragment, useContext } from 'react';
import LottieForLoading from './LottieForLoading';
import ThemeContext from './ThemeContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { user, userDetails, signOut } = useUser();
  const { dark } = useContext(ThemeContext);

  if (!userDetails) return <LottieForLoading />;

  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-800 border-b-2 dark:border-gray-700 shadow"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <Link href="/app">
                  {dark ? (
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/images/logo/logo-dark.svg"
                        alt="Lets Raise"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/images/logo/logo-light.svg"
                        alt="Lets Raise"
                      />
                    </div>
                  )}
                </Link>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-green-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href="/app">
                    <a
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        router.pathname === '/app'
                          ? 'border-green-500 text-gray-900 dark:text-gray-100'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      Inicio
                    </a>
                  </Link>
                  <Link href="/app/Lets">
                    <a
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        router.pathname === '/app/raise'
                          ? 'border-green-500 text-gray-900 dark:text-gray-100'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      Lets Raise
                    </a>
                  </Link>
                  <Link href="/app/plans">
                    <a
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        router.pathname === '/app/plans'
                          ? 'border-green-500 text-gray-900 dark:text-gray-100'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      Planes
                    </a>
                  </Link>
                  <Link href="/app/contact">
                    <a
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        router.pathname === '/app/contact'
                          ? 'border-green-500 text-gray-900 dark:text-gray-100'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      Contacto
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <ThemeToggle />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                <ThemeToggle />
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      <span className="sr-only">Open user menu</span>
                      {userDetails.avatar_url ? (
                        <img
                          className="object-cover h-8 w-8 rounded-full"
                          src={userDetails.avatar_url}
                          alt=""
                        />
                      ) : (
                        <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <svg
                            className="h-full w-full text-gray-300 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => router.push('/app/settings')}
                            className={classNames(
                              active ? 'bg-gray-100 dark:bg-gray-500' : '',
                              'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer'
                            )}
                          >
                            Configuración
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => {
                              signOut();
                              router.replace('/signin');
                            }}
                            className={classNames(
                              active ? 'bg-gray-100 dark:bg-gray-500' : '',
                              'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer'
                            )}
                          >
                            Cerrar Sesión
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-green-50 border-green-500 text-green-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Link href="/app">
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    router.pathname === '/app'
                      ? 'bg-green-50 dark:bg-gray-700 border-green-500 text-green-700 dark:text-green-500'
                      : 'border-transparent text-gray-600 dark:text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:hover:text-gray-400'
                  }`}
                >
                  Inicio
                </a>
              </Link>
              <Link href="/app/Lets">
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    router.pathname === '/app/Lets'
                      ? 'bg-green-50 dark:bg-gray-700 border-green-500 text-green-700 dark:text-green-500'
                      : 'border-transparent text-gray-600 dark:text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:hover:text-gray-400'
                  }`}
                >
                  Lets Raise
                </a>
              </Link>
              <Link href="/app/plans">
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    router.pathname === '/app/plans'
                      ? 'bg-green-50 dark:bg-gray-700 border-green-500 text-green-700 dark:text-green-500'
                      : 'border-transparent text-gray-600 dark:text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:hover:text-gray-400'
                  }`}
                >
                  Planes
                </a>
              </Link>
              <Link href="/app/contact">
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    router.pathname === '/app/contact'
                      ? 'bg-green-50 dark:bg-gray-700 border-green-500 text-green-700 dark:text-green-500'
                      : 'border-transparent text-gray-600 dark:text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:hover:text-gray-400'
                  }`}
                >
                  Contacto
                </a>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  {userDetails.avatar_url ? (
                    <img
                      className="object-cover h-10 w-10 rounded-full"
                      src={userDetails.avatar_url}
                      alt=""
                    />
                  ) : (
                    <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <svg
                        className="h-full w-full text-gray-300 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-gray-300">
                    {userDetails.full_name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link href="/app/settings">
                  <a
                    className={`block px-4 py-2 text-base font-medium ${
                      router.pathname === '/app/settings'
                        ? 'bg-green-50 dark:bg-gray-700 border-green-500 text-green-700 dark:text-green-500'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:hover:text-gray-400'
                    }`}
                  >
                    Configuración
                  </a>
                </Link>

                <a
                  onClick={() => {
                    signOut();
                    router.replace('/signin');
                  }}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:hover:text-gray-400"
                >
                  Cerrar Sesión
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
