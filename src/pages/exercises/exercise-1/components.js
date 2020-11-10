// These are helper components that you must use in your exercise playground.

export function IncreaseButton(props) {
  return (
    <button {...props} className="bg-blue-700 font-bold py-4 w-48 rounded-md text-xl text-white">
      Increase
    </button>
  );
}

export function DecreaseButton(props) {
  return (
    <button {...props} className="bg-pink-700 font-bold py-4 w-48 rounded-md text-xl text-white">
      Decrease
    </button>
  );
}

export function CountValue(props) {
  return <span {...props} data-testid="counter" className="col-span-2 text-6xl text-center" />;
}
