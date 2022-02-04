import '@/assets/chrome-bug.scss';
import '@/assets/unreset.scss';
import '@/assets/main.scss';
import { ThemeProvider } from '@/components/ThemeContext';
import { UserContextProvider } from '@/utils/useUser';
import { useRouter } from 'next/router';
import nprogress from 'nprogress';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  const router = useRouter();

  useEffect(() => {
    const routeChangeStart = () => nprogress.start();

    const routeChangeComplete = () => nprogress.done();

    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeError', routeChangeComplete);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeError', routeChangeComplete);
    };
  }, [router]);

  return (
    <ThemeProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}
