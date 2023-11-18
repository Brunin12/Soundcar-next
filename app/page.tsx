import Head from 'next/head';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Soundcar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <main className="flex-grow">
        <h1>Teste </h1>
      </main>
    </div>
  );
};

export default Home;
