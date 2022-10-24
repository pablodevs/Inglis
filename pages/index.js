import { Main, Theme } from 'components';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Inglis</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://unpkg.com/@picocss/pico@latest/css/pico.min.css' />
      </Head>

      <header>
        <h1 className='text-center'>Welcome to Inglis</h1>
        <Theme />
      </header>

      <Main />

      <footer >
        <p style={{ textAlign: 'center' }}>Hand-crafted by <a href='https://www.linkedin.com/in/pablodevs/' target='_blank'>pablodevs</a></p>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 1.5rem;
        }

        main {
          margin-bottom: auto;
        }

        h1 {
          --typography-spacing-vertical: 2rem;
        }

        .text-center {
          text-align: center;
        }

        .flex-base-1 {
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }

        input[type='search'] {
          margin-bottom: 0;
        }

        .error-message {
          color: var(--del-color);
        }
      `}</style>
    </div>
  );
};
