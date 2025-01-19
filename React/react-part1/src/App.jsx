import { useState } from "react";

function App() {
  return (
    <>
      <Counter></Counter>
      {/* <AnotherCounter></AnotherCounter> */}
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>increase count</button>
      <button onClick={() => setCount(count - 1)}>decrease Count</button>
      <button onClick={() => setCount(0)}>reset Count</button>
    </>
  );
}

function AnotherCounter() {
  const [count, setCount] = useState(0);
  console.log("inside counter component"); //& we will get infinite log's as the react page renders again and again
  setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
export default App;
