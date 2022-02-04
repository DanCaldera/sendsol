import Background from '@/components/Background';
import Meta from '@/components/Meta';
import Input from '@/components/ui/Input';
import { supabase } from '@/utils/supabase-client';
import { useUser } from '@/utils/useUser';
import { MailIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState(router.query.email || '');
  const [loading, setLoading] = useState<boolean>(false);
  const { user, signIn } = useUser();

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter an email');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .eq('email', email);

    if (error) {
      toast.error('Email already in the waitlist');
    }

    if (data && data.length && data[0].temporarily_enabled) {
      const { error } = await signIn({ email });

      if (error) {
        toast.error('Error sending magic link');
        setLoading(false);
        return;
      }
      toast.success('We have sended a magic link to your email');
    } else if (data && data.length && !data[0].temporarily_enabled) {
      toast.error('Wait to activate your account');
      setLoading(false);
      return;
    }
    setEmail('');
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user]);

  return (
    <Background>
      <div className="min-h-screen bg-green-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Meta title="Sign In" />
        <Toaster />
        <h2
          className="mt-6 text-center text-3xl font-extrabold text-white"
          onClick={() => router.replace('/')}
        >
          Sign in to SendSol
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-green-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSignin} className="space-y-6">
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <Input
                  type="email"
                  value={email}
                  onChange={setEmail}
                  className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send magic-link
                  {loading && (
                    <i className="fa fa-circle-o-notch fa-spin py-1 px-1"></i>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default SignIn;
