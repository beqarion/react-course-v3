import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="btn"
      >
        toggle btn
      </button>
      {toggle && <SecondComponent />}
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log("Some func run");
    };
    window.addEventListener("scroll", someFunc);
    return () => {
      // window.removeEventListener("scroll", someFunc);
      console.log("cleanup");
    };
  }, []);
  return <div>Second component</div>;
};

export default CleanupFunction;
