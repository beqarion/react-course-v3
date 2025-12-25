import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setTimeout(() => {
      console.log("Clicked the button");
      setCount(count + 1);
      console.log(count);
    }, 3000);
  };
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={increment}>
        increment
      </button>
    </>
  );
};

export default UseStateGotcha;
