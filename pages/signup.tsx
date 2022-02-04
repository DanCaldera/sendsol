import Background from '@/components/Background';
import Footer from '@/components/home-ui/Footer';
import Meta from '@/components/Meta';
import ThemeContext from '@/components/ThemeContext';
import Input from '@/components/ui/Input';
import stringsEs from '@/utils/strings-es';
import { updateUserName } from '@/utils/supabase-client';
import { useUser } from '@/utils/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signUp } = useUser();
  const { dark } = useContext(ThemeContext);

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error, user } = await signUp({ email, password });
    if (error) {
      const message =
        error.message ===
        'A user with this email address has already been registered'
          ? stringsEs.errors.already_used_email
          : error.message;
      toast.error(message);
    } else {
      if (user) {
        await updateUserName(user, name);
        setUser(user);
        toast.success('Revisa tu email para confirmar tu cuenta');
      } else {
        toast.success('Revisa tu email para confirmar tu cuenta');
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user]);

  return (
    <Background>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Meta title="Registro" />
        <Toaster />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            {dark ? (
              <img
                className="mx-auto h-60 w-auto"
                src={'images/logo/A-02-02.png'}
                alt="SendSol"
              />
            ) : (
              <img
                className="mx-auto h-60 w-auto"
                src={'images/logo/A-03.png'}
                alt="SendSol"
              />
            )}
          </Link>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nombre
                </label>
                <div className="mt-1">
                  <Input
                    onChange={setName}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <Input
                    type="email"
                    onChange={setEmail}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <Input
                    type="password"
                    onChange={setPassword}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  // disabled={loading || !email.length || !password.length}
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Registrarme
                  {loading && (
                    <i className="fa fa-circle-o-notch fa-spin py-1 px-1"></i>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center text-sm py-5 px-4 text-gray-800 dark:text-gray-300">
          {'¿Ya tienes una cuenta?'}
          <Link href="/signin">
            <a className="font-medium text-green-500 hover:text-green-500 mx-1">
              Inicia Sesión
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    </Background>
  );
};

export default SignIn;
