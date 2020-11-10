import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DialogContent, DialogOverlay } from '@reach/dialog';
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

function ExerciseLayout({ playground, challenge, notes }) {
  const exerciseParams = useExerciseParams();
  const [showDialog, setShowDialog] = useState(false);

  const currentId = exerciseParams.id;
  const isPrevDisabled = currentId === 1;
  const prevId = isPrevDisabled ? currentId : currentId - 1;
  const nextId = currentId + 1;

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div className="min-h-screen bg-gray-200 grid grid-cols-2 grid-rows-layout gap-x-4">
      <Head>
        <title>Exercise {exerciseParams.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="col-span-2 bg-orange-300 text-orange-800 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-medium">Exercises</h1>
          <div className="space-x-4">
            <Link href={`/exercises/exercise-${prevId}`}>
              <a className={cn('bg-orange-700 px-4 py-2 rounded-md text-white', { 'opacity-25': isPrevDisabled })}>
                Prev
              </a>
            </Link>
            <span className="tabular-nums">{currentId}</span>
            <Link href={`/exercises/exercise-${nextId}`}>
              <a className="bg-orange-700 px-4 py-2 rounded-md text-white">Next</a>
            </Link>
          </div>
        </div>
        <button onClick={open}>Show Notes</button>
        <DialogOverlay className="w-screen overflow-x-hidden" isOpen={showDialog} onDismiss={close}>
          <motion.div
            className="absolute right-0 z-10"
            initial={{ x: 50, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <DialogContent
              aria-label="Read the notes for this exercise"
              className="min-h-screen m-0 px-10"
            >
              <button
                className="bg-orange-500 text-orange-100 focus:bg-orange-600 focus:shadow-outline px-6 py-2 font-bold rounded-md"
                onClick={close}
              >
                Close Notes
              </button>
              <div className="prose mt-4">{notes}</div>
            </DialogContent>
          </motion.div>
        </DialogOverlay>
      </nav>
      <div className="">
        <div className="bg-white h-full overflow-y-auto">{playground}</div>
      </div>
      <div className="">
        <div className="bg-white h-full overflow-y-auto">{challenge}</div>
      </div>
    </div>
  );
}

export default ExerciseLayout;
