import Head from 'next/head';

function Home() {
  return (
    <div className="min-h-screen bg-gray-200 grid grid-cols-2 grid-rows-layout gap-x-4">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl">Homepage</h1>
    </div>
  );
}

export default Home;
