import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabsContext } from '@reach/tabs';
import { motion } from 'framer-motion';
import cn from 'clsx';

function useExerciseParams() {
  const router = useRouter();

  const { pathname } = router;
  const parts = pathname.split('/');
  const exerciseSlug = parts.find((part) => part.startsWith('exercise-'));
  const exerciseIdStr = exerciseSlug.split('-')[1];
  const exerciseId = Number(exerciseIdStr);

  return {
    slug: exerciseSlug,
    id: exerciseId,
  };
}

function Navbar({ currentId }) {
  const { selectedIndex, focusedIndex } = useTabsContext();

  const isPrevDisabled = currentId === 1;
  const prevId = isPrevDisabled ? currentId : currentId - 1;
  const nextId = currentId + 1;
  const tabs = ['Playground', 'Final Solution'];

  return (
    <nav className="col-span-2 bg-orange-300 text-orange-800 px-8 flex justify-between">
      <TabList className="flex pt-5 space-x-2">
        {tabs.map((tab, tabIndex) => (
          <Tab
            key={tab}
            className={cn(
              'block px-3 rounded-t-md focus:outline-none transition duration-300 ease-in-out',
              {
                'bg-white': tabIndex === selectedIndex,
                'hover:bg-white hover:bg-opacity-50': tabIndex !== selectedIndex,
              },
            )}
          >
            <div className="py-2">{tab}</div>
            <div
              className={cn('border-b-2 border-transparent transition duration-700 ease-in-out', {
                'border-orange-400': tabIndex === focusedIndex,
              })}
            />
          </Tab>
        ))}
      </TabList>
      <h1 className="text-xl font-medium py-4 my-auto">
        Exercises <span className="tabular-nums">{currentId}</span>
      </h1>
      <div className="space-x-4 my-auto">
        <Link href={`/exercises/exercise-${prevId}`}>
          <a
            tabIndex={isPrevDisabled ? -1 : 0}
            className={cn('bg-orange-600  px-4 py-2 rounded-md text-white', {
              'opacity-25': isPrevDisabled,
              'hover:bg-orange-700 focus:bg-orange-800': !isPrevDisabled,
            })}
          >
            Prev
          </a>
        </Link>
        <Link href={`/exercises/exercise-${nextId}`}>
          <a className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-800  px-4 py-2 rounded-md text-white">
            Next
          </a>
        </Link>
      </div>
    </nav>
  );
}

function ExerciseLayout({ playground, challenge, notes }) {
  const exerciseParams = useExerciseParams();
  const currentId = exerciseParams.id;

  return (
    <Tabs className="min-h-screen bg-gray-200 grid grid-cols-layout grid-rows-layout gap-x-4">
      <Head>
        <title>Exercise {currentId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentId={currentId} />
      <TabPanels className="bg-white h-full">
        <TabPanel className="outline-none">{playground}</TabPanel>
        <TabPanel className="outline-none">{challenge}</TabPanel>
      </TabPanels>
      <div className="bg-white h-full px-10 py-8">
        <div className="prose">{notes}</div>
      </div>
    </Tabs>
  );
}

export default ExerciseLayout;
