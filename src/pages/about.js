import Link from 'next/link';

function About() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center flex-col space-y-4">
      <h1 className="text-4xl">About Page Under Construction 🚧</h1>
      <p className="text-xl">Try out the exercises-</p>
      <Link href="/exercises/exercise-1">
        <a className="text-3xl text-blue-500 underline">Exercise 1</a>
      </Link>
    </div>
  );
}

export default About;
