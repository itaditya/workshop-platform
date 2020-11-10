// These are helper components that you must use in your exercise playground.

export function IncreaseButton(props) {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-800 font-bold py-4 w-48 rounded-md text-xl text-white"
    >
      Increase
    </button>
  );
}

export function DecreaseButton(props) {
  return (
    <button
      {...props}
      className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:bg-pink-800 font-bold py-4 w-48 rounded-md text-xl text-white"
    >
      Decrease
    </button>
  );
}

export function CountValue(props) {
  return <span {...props} data-testid="counter" className="col-span-2 text-6xl text-center" />;
}
