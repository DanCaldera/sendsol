import Background from '@/components/Background';
import Footer from '@/components/home-ui/Footer';
import Meta from '@/components/Meta';
import Navbar from '@/components/Navbar';
// import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Plans = ({ products }) => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) router.replace('/signin');
  }, [user]);

  return (
    <Background>
      <Meta title="Planes" />
      <Navbar />
      <Footer />
    </Background>
  );
};

export default Plans;

// export async function getStaticProps() {
//   const products = await getActiveProductsWithPrices();

//   return {
//     props: {
//       products
//     },
//     revalidate: 60
//   };
// }
