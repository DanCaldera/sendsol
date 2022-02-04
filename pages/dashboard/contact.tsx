import Background from '@/components/Background';
import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container';
import Footer from '@/components/home-ui/Footer';
import Meta from '@/components/Meta';
import Navbar from '@/components/Navbar';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Contact = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) router.replace('/signin');
  }, [user]);

  return (
    <Background>
      <Meta title="Contacto" />
      <Navbar />
      <div className="py-24">
        <Container>
          <ContactForm />
        </Container>
      </div>
      <Footer />
    </Background>
  );
};

export default Contact;
