const Logo = ({ className = '', ...props }) => (
  <div className="flex-shrink-0 flex items-center">
    <img
      className="block lg:hidden h-12 w-auto"
      src={'images/logo/A-03-logo.png'}
      alt="Send Logo"
    />
    <img
      className="hidden lg:block h-12 w-auto"
      src={'images/logo/A-03-logo.png'}
      alt="Send Logo"
    />
  </div>
);

export default Logo;
