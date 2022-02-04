import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default Container;
