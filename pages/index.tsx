import Background from '@/components/Background';
import Hero from '@/components/Hero';
import Footer from '@/components/home-ui/Footer';
import Meta from '@/components/Meta';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PricingPage({ products }) {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user]);

  return (
    <Background>
      <Meta />
      {/* <Hero /> */}
      {/* <Feature /> */}
      <Footer />
    </Background>
  );
}

// export async function getStaticProps() {
//   const products = await getActiveProductsWithPrices();

//   return {
//     props: {
//       products
//     },
//     revalidate: 60
//   };
// }
