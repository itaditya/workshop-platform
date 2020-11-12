const path = require('path');
const fs = require('fs');
const birla = require('birla');

const config = require('../../project.config.json');
const newExerciseId = config.lastExerciseId + 1;

function updateExerciseId() {
  const newConfig = {
    ...config,
    lastExerciseId: newExerciseId,
  };

  const prettyConfig = JSON.stringify(newConfig, null, 2);
  const filePath = path.join(process.cwd(), 'project.config.json');

  fs.writeFileSync(filePath, prettyConfig);
}

async function task() {
  await birla(newExerciseId, 'exercise', 'src/pages/exercises');
  updateExerciseId();
}

task();
