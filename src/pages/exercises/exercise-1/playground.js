import { IncreaseButton, DecreaseButton, CountValue } from './components';

function Playground() {
  return (
    <div className="grid grid-cols-2 auto-rows-min justify-items-center gap-8 pt-24 px-10">
      <CountValue>0</CountValue>
      <IncreaseButton />
      <DecreaseButton />
    </div>
  );
}

export default Playground;
