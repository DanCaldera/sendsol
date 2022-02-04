import Background from '@/components/Background';
import Meta from '@/components/Meta';
import classNames from '@/utils/class-names';
import { useUser } from '@/utils/useUser';
import { Dialog, Transition } from '@headlessui/react';
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  ChartBarIcon,
  CursorClickIcon,
  EyeIcon,
  HomeIcon,
  MailOpenIcon,
  MenuAlt1Icon,
  UsersIcon,
  XIcon
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Leads', href: '#', icon: UsersIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false }
];

const stats = [
  {
    id: 1,
    name: 'Page Views',
    stat: '71,897',
    icon: EyeIcon,
    change: '122',
    changeType: 'increase'
  },
  {
    id: 2,
    name: 'New Leads',
    stat: '58',
    icon: MailOpenIcon,
    change: '5.4%',
    changeType: 'increase'
  },
  {
    id: 3,
    name: 'Avg. Click Rate',
    stat: '24.57%',
    icon: CursorClickIcon,
    change: '3.2%',
    changeType: 'decrease'
  }
];

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }

  // More people...
];

const index = () => {
  const router = useRouter();
  const { user, signOut } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) router.replace('/signin');
  }, [user]);

  return (
    <Background>
      <div className="bg-gray-50">
        <Meta title="Dashboard" />
        <>
          {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
          <div className="min-h-full">
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 flex z-40 lg:hidden"
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="/images/logo/logo-light.svg"
                        alt="raise logo"
                      />
                    </div>
                    <nav
                      className="mt-5 flex-shrink-0 h-full overflow-y-auto"
                      aria-label="Sidebar"
                    >
                      <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-green-100 text-green-700'
                                : 'text-gray-600 hover:bg-green-100',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? 'text-green-700'
                                  : 'text-gray-600',
                                'mr-4 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="flex-shrink-0 flex border-t border-gray-200 p-4 mt-4">
                        <a
                          onClick={() => {
                            signOut();
                            router.replace('/signin');
                          }}
                          className="flex-shrink-0 w-full group block"
                        >
                          <div className="flex items-center">
                            <div>
                              <img
                                className="inline-block h-9 w-9 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                Tom Cook
                              </p>
                              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                View profile
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </nav>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                  {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
              </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col flex-grow bg-white pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="h-6 w-auto"
                    src="/images/logo/logo-light.svg"
                    alt="raise logo"
                  />
                </div>
                <h1 className="ml-4 mt-6 font-bold">Rockets for space</h1>
                <nav
                  className="mt-5 flex-1 flex flex-col divide-y divide-green-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-green-100 text-green-600'
                            : 'text-gray-600 hover:bg-green-100',
                          'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-green-700' : 'text-gray-600',
                            'mr-4 flex-shrink-0 h-6 w-6 '
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a
                    onClick={() => {
                      signOut();
                      router.replace('/signin');
                    }}
                    className="flex-shrink-0 w-full group block"
                  >
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-9 w-9 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          Tom Cook
                        </p>
                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:pl-64 flex flex-col flex-1">
              <div className="relative z-10 flex-shrink-0 flex h-16 bg-gray-50 border-b border-gray-200 lg:border-none">
                <button
                  type="button"
                  className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <main className="flex-1 pb-8">
                <div className="mt-4">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl leading-6 font-medium text-gray-900 mb-6">
                      Dashboard
                    </h1>

                    <div className="flex justify-between">
                      <h2 className="text-xl leading-6 font-medium text-gray-900">
                        Activity
                      </h2>
                      <div className="text-base leading-6 text-gray-900 justify-end text-right">
                        <button className="bg-green-50 text-green-700 font-medium hover:bg-green-100 pl-4 pr-4 pt-2 pb-2 rounded-md">
                          View all
                        </button>
                      </div>
                    </div>

                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {stats.map((item) => (
                        <div
                          key={item.id}
                          className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                        >
                          <dt>
                            <div className="absolute bg-green-700 rounded-md p-3">
                              <item.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                              {item.name}
                            </p>
                          </dt>
                          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">
                              {item.stat}
                            </p>
                            <p
                              className={classNames(
                                item.changeType === 'increase'
                                  ? 'text-green-600'
                                  : 'text-red-600',
                                'ml-2 flex items-baseline text-sm font-semibold'
                              )}
                            >
                              {item.changeType === 'increase' ? (
                                <ArrowSmUpIcon
                                  className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ArrowSmDownIcon
                                  className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {item.changeType === 'increase'
                                  ? 'Increased'
                                  : 'Decreased'}{' '}
                                by
                              </span>
                              {item.change}
                            </p>
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="flex justify-between items-center mt-12 mb-8">
                      <h2 className="text-xl leading-6 font-medium text-gray-900">
                        Recent visitors
                      </h2>
                      <div className="text-base leading-6 text-gray-900 justify-end text-right">
                        <button className="bg-green-50 text-green-700 font-medium hover:bg-green-100 pl-4 pr-4 pt-2 pb-2 rounded-md">
                          View all
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300 mb-8" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                              <tbody className="bg-white divide-y divide-gray-200">
                                {people.map((person) => (
                                  <tr
                                    key={person.email}
                                    className="hover:bg-gray-50 cursor-pointer"
                                  >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="flex items-center">
                                        <div className="ml-4">
                                          <div className="text-sm font-medium text-green-900">
                                            {person.name}
                                          </div>
                                          <div className="flex text-sm text-gray-500">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="h-5 w-5 mr-2 text-gray-400"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                            >
                                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            {person.email}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-sm text-gray-900">
                                        Last visited 1 hour ago
                                      </div>
                                      <div className="flex text-sm text-gray-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5 text-green-400 mr-2"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                          />
                                        </svg>{' '}
                                        Viewed your deck
                                      </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                      <div className="text-gray-600 hover:text-indigo-900">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </>
        {/* <Footer /> */}
      </div>
    </Background>
  );
};

export default index;
