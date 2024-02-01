import Counter from "./Counter";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function CounterList() {
  return (
    <div className="container">
      {numbers.map((number) => (
        <Counter number={number} />
      ))}
    </div>
  );
}

export default CounterList;
