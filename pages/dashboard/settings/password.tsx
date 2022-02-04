import Background from '@/components/Background';
import Footer from '@/components/home-ui/Footer';
import Meta from '@/components/Meta';
import Navbar from '@/components/Navbar';
import Input from '@/components/ui/Input';
import { supabase } from '@/utils/supabase-client';
import { useUser } from '@/utils/useUser';
import { CogIcon, CreditCardIcon, KeyIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const password = () => {
  const { user } = useUser();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const subNavigation = [
    {
      name: 'Cuenta',
      href: '/app/settings',
      icon: CogIcon,
      current: router.pathname === '/app/settings'
    },
    {
      name: 'Contraseña',
      href: '/app/settings/password',
      icon: KeyIcon,
      current: router.pathname === '/app/settings/password'
    },
    {
      name: 'Facturación',
      href: '/app/settings/billing',
      icon: CreditCardIcon,
      current: router.pathname === '/app/settings/billing'
    }
  ];

  const handleChangePassword = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.update({
      email: user.email,
      password
    });

    if (error) {
      setLoading(false);
      setPassword('');
      return toast.error(error.message);
    }

    setLoading(false);
    setPassword('');
    toast.success('Tu contraseña se ha actualizado con éxito');
  };

  // useEffect(() => {
  //   if (!user) router.replace('/signin');
  // }, [user]);

  return (
    <Background>
      <Meta title="Configuración" />
      <Toaster />
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-800 py-20 min-h-screen">
        <div className="relative py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-300">
            Configuración
          </h1>
        </div>

        <main className="relative -mt-28">
          <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200 dark:divide-gray-600 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {subNavigation.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? 'bg-green-50 dark:bg-gray-700 border-green-500 text-green-700 dark:text-green-500 hover:bg-green-50 hover:text-green-700'
                              : 'border-transparent text-gray-900 dark:text-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200',
                            'group border-l-4 px-3 py-2 flex items-center text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-green-500 group-hover:text-green-500'
                                : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-200',
                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate">{item.name}</span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </aside>

                <form
                  className="divide-y divide-gray-200 lg:col-span-9"
                  onSubmit={handleChangePassword}
                >
                  <div className="pt-6">
                    <div className="px-4 sm:px-6">
                      <div>
                        <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                          Cambiar contraseña
                        </h2>
                      </div>

                      <div className="mt-6 grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                          <label
                            htmlFor="newpassword"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Nueva contraseña
                          </label>
                          <Input
                            type="password"
                            name="newpassword"
                            value={password}
                            onChange={setPassword}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                      <button
                        disabled={loading}
                        type="submit"
                        className="ml-5 bg-green-500 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Cambiar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default password;
