import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = () => {
  return {
    pageProps: {
      test: 100,
    },
  };
};

export default MyApp;
