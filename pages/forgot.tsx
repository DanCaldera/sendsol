import Link from 'next/link';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Input from '@/components/ui/Input';
import Meta from '@/components/Meta';
import ThemeContext from '@/components/ThemeContext';
import Background from '@/components/Background';

const Forgot = () => {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { user, recoverPassword } = useUser();
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (user) router.replace('/app');
  }, [user]);

  const handleResetPassword = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    if (email === 'xxxxxx3323@gmail.com') {
      toast.success('Revisa la bandeja de tu correo electrónico');

      return setTimeout(() => {
        router.replace('/signin');
      }, 2000);
    }

    const { error } = await recoverPassword(email);

    if (error) {
      //   setMessage({ type: 'error', content: error.message });
      setLoading(false);
      return toast.error(error.message);
    }

    toast.success('Revisa la bandeja de tu correo electrónico');

    setTimeout(() => {
      router.replace('/signin');
    }, 2000);
  };

  return (
    <Background>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Meta title="Recuperar Contraseña" />
        <Toaster />
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow sm:rounded-lg max-w-md self-center my-12">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
              Recuperar contraseña
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
              <p>
                Te llegará un mensaje con el link para reestablecer tu
                contraseña.
              </p>
            </div>
            <form
              className="mt-5 sm:flex sm:items-center"
              onSubmit={handleResetPassword}
            >
              <div className="w-full sm:max-w-xs">
                <label htmlFor="email" className="sr-only">
                  Correo Electrónico
                </label>
                <Input
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={setEmail}
                  required
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 rounded-md"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {loading ? (
                  <i className="fa fa-circle-o-notch fa-spin py-1 px-1"></i>
                ) : (
                  'Enviar'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center text-sm py-5 px-4 text-gray-800 dark:text-gray-300">
          {'¿Quieres regresar?'}
          <Link href="/signin">
            <a className="font-medium text-green-500 hover:text-green-500 mx-1">
              Da click aquí
            </a>
          </Link>
        </div>
      </div>
    </Background>
  );
};

export default Forgot;
