// import Navbar from '@/components/Navbar';
import Footer from '@/components/home-ui/Footer';
import Meta from '@/components/Meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      {/* <Navbar /> */}
      <main id="skip">{children}</main>
      <Footer />
    </>
  );
}
