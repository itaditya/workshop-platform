import Playground from './playground';
import Challenge from './challenge';
import Notes from './notes';
import ExerciseLayout from '_reusable/ExerciseLayout';

function ExercisePage() {
  return <ExerciseLayout playground={<Playground />} challenge={<Challenge />} notes={<Notes />} />;
}

export default ExercisePage;
