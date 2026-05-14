import Head from 'next/head';
import { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    // Placeholder for any side‑effects (analytics, etc.)
  }, []);

  return (
    <>
      <Head>
        <title>Minimal Hello Page</title>
        <meta name="description" content="A minimal static hello page" />
      </Head>
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          color: '#333',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1>Hello, World!</h1>
      </main>
    </>
  );
};

export default Home;