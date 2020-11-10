import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="max-w-content text-3xl text-gray-700">Another new project? Don't tell me you already bought the domain. Hope this one gets completed Good Luck!</p>
    </div>
  );
}

export default Home;
