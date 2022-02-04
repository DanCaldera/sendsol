import { FunctionComponent, useState } from 'react';

const Contact: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const _handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = `mailto:soporte@lets.raise?cc=${email}&subject=Contact with Lets Raise Support&body=${message} %0D%0A %0D%0A enviado por ${name} - ${email} - ${phone}`;
  };

  return (
    <div className="relative bg-white dark:bg-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 dark:bg-gray-800"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl">
              Contacto
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-400">
              Cualquier duda sobre la plataforma u ofertas de trabajo
            </p>
            <dl className="mt-8 text-base text-gray-500 dark:text-gray-400">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  {/* <!-- Heroicon name: outline/mail --> */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3">@gmail.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form onSubmit={_handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Nombre
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                  placeholder="Nombre"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                  placeholder="Correo Electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Número Telefónico
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                  placeholder="Número Telefónico"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                  placeholder="Mensaje"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
