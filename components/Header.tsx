import { useRouter } from 'next/router';

const Header = ({ returnRef, title }: any) => {
  const router = useRouter();
  return (
    <div className="py-8">
      <nav className="" aria-label="Back">
        <a
          onClick={() => router.replace(`${returnRef}`)}
          className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700 dar:hover:text-gray-500 cursor-pointer"
        >
          {/* <!-- Heroicon name: solid/chevron-left --> */}
          <svg
            className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Regresar
        </a>
      </nav>
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-400 sm:text-3xl sm:truncate">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Header;
