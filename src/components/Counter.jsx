import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  function decrement() {
    setCounter(counter - 1);
  }

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div className="counter">
      <h2 className="counter-title">{props.title}</h2>
      <div className="counter-body">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <h2 className="counter-number large">{counter}</h2>
        <button className="counter-button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
