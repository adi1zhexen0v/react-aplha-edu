import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const [activeSize, setActiveSize] = useState("S");

  const sizes = ["S", "M", "L"];

  const counterClassNames = `counter-number ${
    activeSize === "S" ? "small" : activeSize === "M" ? "medium" : "large"
  }`;

  function decrement() {
    setCounter(counter - +props.number);
  }

  function increment() {
    setCounter(counter + +props.number);
  }

  function changeSize(sizeFromArgs) {
    setActiveSize(sizeFromArgs);
  }

  return (
    <div className="counter">
      <h2 className="counter-title">Счётчик ({props.number}):</h2>
      <div className="counter-body">
        <button
          className="counter-button counter-button__red"
          onClick={decrement}
        >
          -
        </button>
        <h2 className={counterClassNames}>{counter}</h2>
        <button
          className="counter-button counter-button__green"
          onClick={increment}
        >
          +
        </button>
      </div>

      <div className="counter-size-list">
        {sizes.map((size) => (
          <div
            className={
              size === activeSize
                ? "counter-size-item counter-size-item__active"
                : "counter-size-item"
            }
            onClick={() => changeSize(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
