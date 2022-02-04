import { supabase } from '@/utils/supabase-client';
import { useRouter } from 'next/router';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Input from './ui/Input';

//give me a lorem ipsum
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc,
sit amet euismod nunc nisl euismod.
Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc,
sit amet euismod nunc nisl euismod.
Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc,
sit amet euismod nunc nisl euismod.
Sed euismod, urna eu tincidunt consectetur, nisi nunc egestas nunc,
`;

export default function Hero() {
  // const { dark } = React.useContext(ThemeContext);

  const [email, setEmail] = React.useState('');
  const router = useRouter();

  const _handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter an email');

    const { error } = await supabase.from('waitlist').insert([{ email }]);

    if (error) {
      if (error.code === '23505') {
        const { data, error } = await supabase
          .from('waitlist')
          .select('*')
          .eq('email', email);

        if (error) {
          return toast.error('Email already in the waitlist');
        }

        if (data && data[0].temporarily_enabled) {
          toast.success('Your account is ready to use beta! Please Log In!');
          return router.push(`/signin?email=${email}`);
        }

        return toast.error('Email already in the waitlist');
      } else {
        return toast.error('Something went wrong');
      }
    } else {
      toast(`Thanks for subscribing to our waitlist!`, {
        icon: '👏'
      });
      setEmail('');
    }
  };

  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <Toaster />
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <img
                className="h-8 w-auto"
                src="/images/logo/logo-light.svg"
                alt="Workflow"
              />
            </div>
            <div className="mt-20">
              <div className="mt-6 mb-4 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  One link to help you start fundraising for your startup
                </h1>
              </div>
              <span className="p-1 pl-2 pr-2 rounded-full text-base text-green-500 bg-green-50 uppercase">
                currenlty on beta
              </span>
              <form
                onSubmit={_handleOnSubmit}
                className="mt-12 sm:max-w-lg sm:w-full sm:flex"
              >
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    type="email"
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter your email"
                    onChange={setEmail}
                    value={email}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-green-600 text-base font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-10"
                  >
                    Join the waitlist
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    {/* Used by startups like Wisepath, Picker, Mujer Financiera +
                    10 more. */}
                    Join 100+ startups on the waitlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-green-300"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/logo/hero.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
