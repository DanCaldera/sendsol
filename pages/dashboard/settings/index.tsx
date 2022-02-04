import Background from '@/components/Background';
import Footer from '@/components/home-ui/Footer';
import LottieForLoading from '@/components/LottieForLoading';
import Meta from '@/components/Meta';
import Navbar from '@/components/Navbar';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import classNames from '@/utils/class-names';
import { supabase, updateUser } from '@/utils/supabase-client';
import { useUser } from '@/utils/useUser';
import { CogIcon, CreditCardIcon, KeyIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const settings = () => {
  const { user, userDetails, updateUserDetails } = useUser();
  const router = useRouter();
  const [name, setName] = useState<string | null>('');
  const [username, setUsername] = useState<string | null>('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>('');
  const [biography, setBiography] = useState<string | null>('');
  const [privateAccount, setPrivateAccount] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newAvatarSelected, setAvatarSelected] = useState(null);

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

  useEffect(() => {
    if (userDetails) {
      setName(userDetails.full_name);
      setUsername(userDetails.username);
      setAvatarUrl(userDetails.avatar_url);

      setBiography(userDetails.biography);
      setPrivateAccount(userDetails.is_profile_public);
    }
  }, [userDetails]);

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    let newPublicUrl = null;

    setLoading(true);

    if (newAvatarSelected) {
      const avatarPath = `avatars/${user.id}/avatar.png?${uuidv4()}`;

      const { error } = await supabase.storage
        .from('public')
        .upload(avatarPath, newAvatarSelected.raw, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) {
        setLoading(false);
        return toast.error(error.message);
      }

      const { publicURL, error: urlError } = supabase.storage
        .from('public')
        .getPublicUrl(avatarPath);

      if (urlError) {
        setLoading(false);
        return toast.error(urlError.message);
      }

      newPublicUrl = publicURL;
    }

    const { error } = await updateUser(user, {
      full_name: name,
      username,
      biography,
      is_profile_public: privateAccount,
      avatar_url: newPublicUrl ? newPublicUrl : avatarUrl
    });

    if (error) {
      setLoading(false);
      return toast.error(error.message);
    }

    const details = {
      ...userDetails,
      full_name: name,
      username,
      biography,
      is_profile_public: privateAccount,
      avatar_url: newPublicUrl ? newPublicUrl : avatarUrl
    };

    updateUserDetails(details);

    setLoading(false);
    toast.success('Se han guardado tus cambios correctamente');
  };

  const handleImage = (image: any) => {
    let preview = URL.createObjectURL(image);
    return { preview: preview, raw: image };
  };

  // useEffect(() => {
  //   if (!user) router.replace('/signin');
  // }, [user]);

  if (!userDetails) return <LottieForLoading />;

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
                  className="divide-y divide-gray-200 dark:divide-gray-600 lg:col-span-9"
                  onSubmit={handleSaveChanges}
                >
                  <div className="py-6 px-4 sm:p-6 lg:pb-8">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                        Cuenta
                      </h2>
                    </div>

                    <div className="mt-6 flex flex-col lg:flex-row">
                      <div className="flex-grow space-y-6">
                        <div>
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Nombre de Usuario
                          </label>
                          <div className="mt-1 rounded-md shadow-sm flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-400 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">
                              lets-raise.com/
                            </span>
                            <Input
                              type="text"
                              name="username"
                              value={username}
                              onChange={setUsername}
                              className="focus:ring-green-500 focus:border-green-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Sobre ti
                          </label>
                          <div className="mt-1">
                            <TextArea
                              name="about"
                              rows={3}
                              value={biography}
                              onChange={setBiography}
                              className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Breve descripción de tu perfil. Hyperlinks
                            habilitados.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                        <p
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                          aria-hidden="true"
                        >
                          Foto
                        </p>
                        <div className="mt-1 lg:hidden">
                          <div className="flex items-center">
                            <div
                              className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                              aria-hidden="true"
                            >
                              {avatarUrl && !newAvatarSelected ? (
                                <img
                                  className="object-cover rounded-full h-full w-full"
                                  src={avatarUrl}
                                  alt=""
                                />
                              ) : newAvatarSelected ? (
                                <img
                                  className="object-cover rounded-full h-full w-full"
                                  src={newAvatarSelected.preview}
                                  alt=""
                                />
                              ) : (
                                <span className="inline-block h-full w-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
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
                            <div className="ml-5 rounded-md shadow-sm">
                              <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                                <label
                                  htmlFor="mobile-user-photo"
                                  className="relative text-sm leading-4 font-medium text-gray-700 dark:text-gray-300 pointer-events-none"
                                >
                                  <span>Cambiar</span>
                                  <span className="sr-only"> user photo</span>
                                </label>
                                <input
                                  name="user-photo"
                                  type="file"
                                  accept="image/*"
                                  multiple={false}
                                  onChange={(e) =>
                                    setAvatarSelected(
                                      handleImage(e.target.files[0])
                                    )
                                  }
                                  className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="hidden relative rounded-full overflow-hidden lg:block">
                          {avatarUrl && !newAvatarSelected ? (
                            <img
                              className="object-cover rounded-full h-40 w-40"
                              src={avatarUrl}
                              alt=""
                            />
                          ) : newAvatarSelected ? (
                            <img
                              className="object-cover rounded-full h-40 w-40"
                              src={newAvatarSelected.preview}
                              alt=""
                            />
                          ) : (
                            <span className="relative h-40 w-40 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
                              <svg
                                className="h-40 w-40 text-gray-300 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                          )}
                          <label
                            htmlFor="desktop-user-photo"
                            className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                          >
                            <span>Cambiar</span>
                            <span className="sr-only"> user photo</span>
                            <input
                              name="desktop-user-photo"
                              type="file"
                              accept="image/*"
                              multiple={false}
                              onChange={(e) =>
                                setAvatarSelected(
                                  handleImage(e.target.files[0])
                                )
                              }
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-12 gap-6">
                      <div className="col-span-12">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Nombre
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={name}
                          onChange={setName}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300"
                        />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-12 gap-6">
                      <div className="col-span-12">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Email
                        </label>
                        <Input
                          type="text"
                          name="email"
                          className="mt-1 bg-gray-50 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300"
                          value={user.email}
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 divide-y divide-gray-200 dark:divide-gray-600">
                    <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                      <button
                        disabled={loading}
                        type="submit"
                        className="ml-5 bg-green-500 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Guardar{' '}
                        {loading && (
                          <i className="fa fa-circle-o-notch fa-spin py-1 px-1"></i>
                        )}
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

export default settings;
