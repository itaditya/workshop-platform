import { useState } from 'react';
import { IncreaseButton, DecreaseButton, CountValue } from './components';

function Challenge() {
  const [stateCount, setCount] = useState(0);

  function increment() {
    setCount(stateCount + 1);
  }

  function decrement() {
    if (stateCount > 0) {
      setCount(stateCount - 1);
    }
  }

  return (
    <div className="grid grid-cols-2 auto-rows-min justify-items-center gap-8 pt-24 px-10">
      <CountValue>{stateCount}</CountValue>
      <IncreaseButton onClick={increment} />
      <DecreaseButton onClick={decrement} />
    </div>
  );
}

export default Challenge;
