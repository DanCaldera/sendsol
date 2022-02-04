import Background from '@/components/Background';
import Footer from '@/components/home-ui/Footer';
import LottieForLoading from '@/components/LottieForLoading';
import Meta from '@/components/Meta';
import Navbar from '@/components/Navbar';
import { postData } from '@/utils/helpers';
import { useUser } from '@/utils/useUser';
import { CogIcon, CreditCardIcon, KeyIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const getBillngIntervalStringInEsp = (interval, count) => {
  if (interval === 'month' && count === 1) {
    return 'mes';
  } else if (interval === 'month' && count === 3) {
    return '3 meses';
  } else if (interval === 'year' && count === 1) {
    return 'año';
  }

  return 'mes';
};

const billing = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userLoaded, user, session, subscription } = useUser();

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

  const redirectToCustomerPortal = async () => {
    if (!subscription) {
      return toast.error('Tu plan no necesita portal de usuario');
    }

    setLoading(true);
    const { url, error } = await postData({
      url: '/api/create-portal-link',
      token: session.access_token
    });
    if (error) return toast.error(error.message);
    window.location.assign(url);
    setLoading(false);
  };

  const subscriptionName = subscription && subscription.prices.products.name;
  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription.prices.currency,
      minimumFractionDigits: 0
    }).format(subscription.prices.unit_amount / 100);

  // useEffect(() => {
  //   if (!user) router.replace('/signin');
  // }, [user]);

  if (!user && !userLoaded) return <LottieForLoading />;

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

                <div className="divide-y divide-gray-200 lg:col-span-9">
                  <div className="pt-6">
                    <div className="px-4 sm:px-6">
                      <div>
                        <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                          Tu plan
                        </h2>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Actualmente estás con el plan{' '}
                          {subscriptionName
                            ? subscriptionName
                            : 'Lets Raise Free'}
                        </p>
                      </div>

                      {subscriptionPrice ? (
                        <>
                          <h2 className="text-xl my-4 leading-6 font-medium text-gray-900 dark:text-gray-100">
                            {`${subscriptionPrice} cada ${getBillngIntervalStringInEsp(
                              subscription.prices.interval,
                              subscription.prices.interval_count
                            )}`}
                          </h2>
                        </>
                      ) : (
                        <>
                          <h2 className="text-xl my-4 leading-6 font-medium text-gray-900 dark:text-gray-100">
                            MX$0 cada mes
                          </h2>
                          <Link href="/app/plans">
                            <a className='className="ml-5 bg-green-500 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"'>
                              Escoge un nuevo plan
                            </a>
                          </Link>
                        </>
                      )}
                    </div>
                    <div className="mt-4 py-4 px-4 flex justify-center sm:px-6">
                      <p className="mt-1 text-gray-900 dark:text-gray-300 mr-4 pt-3 sm:pt-2 text-xs sm:text-base">
                        Maneja tu suscripción con
                      </p>
                      <button
                        disabled={loading}
                        type="button"
                        onClick={redirectToCustomerPortal}
                        className="ios-15 align-self"
                      >
                        <div className="wrapper">
                          <span>
                            Stripe
                            {loading && (
                              <i className="fa fa-circle-o-notch fa-spin py-1 px-1"></i>
                            )}
                          </span>
                          <div className="circle circle-12"></div>
                          <div className="circle circle-11"></div>
                          <div className="circle circle-10"></div>
                          <div className="circle circle-9"></div>
                          <div className="circle circle-8"></div>
                          <div className="circle circle-7"></div>
                          <div className="circle circle-6"></div>
                          <div className="circle circle-5"></div>
                          <div className="circle circle-4"></div>
                          <div className="circle circle-3"></div>
                          <div className="circle circle-2"></div>
                          <div className="circle circle-1"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default billing;
