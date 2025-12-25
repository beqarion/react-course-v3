import { useState } from "react";

const ToggleChallenge = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {isHidden ? "show" : "hide"} element
      </button>
      {!isHidden && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
