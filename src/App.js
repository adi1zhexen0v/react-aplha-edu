import Navbar from "./components/Navbar";
import CounterList from "./components/CounterList";

// Жизненные циклы компонента:
// 1) Монтирование/Создание - componentDidMount()
// 2) Обновление - componentDidUpdate()
// 3) Размонтирование/Удаление - componentWillUnmount()

function App() {
  return (
    <>
      <Navbar />
      <CounterList />
    </>
  );
}

export default App;
