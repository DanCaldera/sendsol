import Footer from './home-ui/Footer';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  startQuiz?: any;
};

const Layout = ({ children, startQuiz }: Props) => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
        <main>{children}</main>
      </div>
      {!startQuiz && <Footer />}
    </>
  );
};

export default Layout;
