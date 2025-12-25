import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>increment</button>
    </div>
  );
};

export default UseStateBasics;
