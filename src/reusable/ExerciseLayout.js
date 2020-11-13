import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabsContext } from '@reach/tabs';
import { motion } from 'framer-motion';
import cn from 'clsx';

import config from '../../project.config.json';

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

function PaginateLink({ exerciseId, disabled, children }) {
  const classes = cn('bg-orange-700 text-white px-4 py-2 rounded-md font-semibold tracking-wider select-none', {
    'bg-opacity-50 cursor-not-allowed': disabled,
    'hover:bg-orange-800 active:bg-orange-900 focus:outline-black': !disabled,
  });

  if (disabled) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <Link href={`/exercises/exercise-${exerciseId}`}>
      <a className={classes} tabIndex={disabled ? -1 : 0}>
        {children}
      </a>
    </Link>
  );
}

function Navbar({ currentId }) {
  const { selectedIndex } = useTabsContext();

  const isPrevDisabled = currentId === 1;
  const isNextDisabled = currentId === config.lastExerciseId;
  const tabs = ['Playground', 'Final Solution'];

  return (
    <nav className="col-span-2 bg-orange-300 text-orange-800 px-8 flex justify-between">
      <TabList className="flex pt-5 space-x-2">
        {tabs.map((tab, tabIndex) => (
          <Tab
            key={tab}
            className={cn(
              'block px-3 font-semibold tracking-wide rounded-t-md focus:outline-black transition duration-300 ease-in-out',
              {
                'bg-white': tabIndex === selectedIndex,
                'hover:bg-white hover:bg-opacity-50': tabIndex !== selectedIndex,
              },
            )}
          >
            <div className="py-2">{tab}</div>
          </Tab>
        ))}
      </TabList>
      <h1 className="text-xl font-medium py-4 my-auto">
        Exercises{' '}
        <motion.span
          className="inline-block tabular-nums"
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {currentId}
        </motion.span>
      </h1>
      <div className="space-x-4 my-auto">
        <PaginateLink exerciseId={currentId - 1} disabled={isPrevDisabled}>
          Prev
        </PaginateLink>
        <PaginateLink exerciseId={currentId + 1} disabled={isNextDisabled}>
          Next
        </PaginateLink>
      </div>
    </nav>
  );
}

function ExerciseLayout({ playground, challenge, notes }) {
  const exerciseParams = useExerciseParams();
  const currentId = exerciseParams.id;
  const panels = [playground, challenge];

  return (
    <Tabs className="min-h-screen bg-gray-200 grid grid-cols-2 xl:grid-cols-layout grid-rows-layout gap-x-6">
      <Head>
        <title>Exercise {currentId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentId={currentId} />
      <TabPanels className="bg-white h-full shadow-2xl">
        {panels.map((panel, panelIndex) => (
          <TabPanel key={panelIndex} className="outline-none">
            {panel}
          </TabPanel>
        ))}
      </TabPanels>
      <div className="bg-white h-full px-10 py-8 shadow-2xl">
        <motion.section
          key="notes-section"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose"
        >
          {notes}
        </motion.section>
      </div>
    </Tabs>
  );
}

export default ExerciseLayout;
