import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      activeSize: "S",
    };
  }

  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - +this.props.number,
    }));
  };

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + +this.props.number,
    }));
  };

  changeSize = (sizeFromArgs) => {
    this.setState(() => ({
      activeSize: sizeFromArgs,
    }));
  };

  componentDidMount() {
    console.log("Компонент Counter был монтирован!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log(
        `Счетчик изменился с ${prevState.counter} на ${this.state.counter}`
      );
    }

    if (prevState.activeSize !== this.state.activeSize) {
      console.log(
        `Размер счетчика изменился с ${prevState.activeSize} на ${this.state.activeSize}`
      );
    }
  }

  componentWillUnmount() {
    console.log("Компонент Counter был размонтирован!");
  }

  render() {
    const sizes = ["S", "M", "L"];

    const counterClassNames = `counter-number ${
      this.state.activeSize === "S"
        ? "small"
        : this.state.activeSize === "M"
        ? "medium"
        : "large"
    }`;

    return (
      <div className="counter">
        <h2 className="counter-title">Счётчик ({this.props.number}):</h2>
        <div className="counter-body">
          <button
            className="counter-button counter-button__red"
            onClick={this.decrement}
          >
            -
          </button>
          <h2 className={counterClassNames}>{this.state.counter}</h2>
          <button
            className="counter-button counter-button__green"
            onClick={this.increment}
          >
            +
          </button>
        </div>

        <div className="counter-size-list">
          {sizes.map((size) => (
            <div
              key={size}
              className={
                size === this.state.activeSize
                  ? "counter-size-item counter-size-item__active"
                  : "counter-size-item"
              }
              onClick={() => this.changeSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Counter;

// import { useState, useEffect } from "react";

// function Counter(props) {
//   const [counter, setCounter] = useState(0);
//   const [activeSize, setActiveSize] = useState("S");

//   useEffect(() => {
//     console.log("Компонент Counter был монтирован!");
//   }, []); // componentDidMount()

//   useEffect(() => {
//     console.log("Компонент Counter был обновлен!");
//   }, [counter, activeSize]); // componentDidUpdate()

//   const sizes = ["S", "M", "L"];

//   const counterClassNames = `counter-number ${
//     activeSize === "S" ? "small" : activeSize === "M" ? "medium" : "large"
//   }`;

//   function decrement() {
//     setCounter(counter - +props.number);
//   }

//   function increment() {
//     setCounter(counter + +props.number);
//   }

//   function changeSize(sizeFromArgs) {
//     setActiveSize(sizeFromArgs);
//   }

//   return (
//     <div className="counter">
//       <h2 className="counter-title">Счётчик ({props.number}):</h2>
//       <div className="counter-body">
//         <button
//           className="counter-button counter-button__red"
//           onClick={decrement}
//         >
//           -
//         </button>
//         <h2 className={counterClassNames}>{counter}</h2>
//         <button
//           className="counter-button counter-button__green"
//           onClick={increment}
//         >
//           +
//         </button>
//       </div>

//       <div className="counter-size-list">
//         {sizes.map((size) => (
//           <div
//             key={size}
//             className={
//               size === activeSize
//                 ? "counter-size-item counter-size-item__active"
//                 : "counter-size-item"
//             }
//             onClick={() => changeSize(size)}
//           >
//             {size}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Counter;
