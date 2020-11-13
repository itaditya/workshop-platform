import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center flex-col space-y-4">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl">Home Page Under Construction 🚧</h1>
      <p className="text-xl">Try out the exercises-</p>
      <Link href="/exercises/exercise-1">
        <a className="text-3xl text-blue-500 underline">Exercise 1</a>
      </Link>
    </div>
  );
}

export default Home;
