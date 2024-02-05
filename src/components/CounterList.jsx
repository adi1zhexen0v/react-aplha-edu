import { useState } from "react";
import Counter from "./Counter";

function CounterList() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickToggleCounter() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <button className="toggle-btn" onClick={handleClickToggleCounter}>
        {isOpen ? "Скрыть счетчик" : "Показать счетчик"}
      </button>
      {isOpen && <Counter number={1} />}
    </div>
  );
}

export default CounterList;
