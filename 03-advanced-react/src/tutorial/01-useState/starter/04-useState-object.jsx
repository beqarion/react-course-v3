import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 28,
    hobby: "Read books",
  });

  const displayPerson = () => {
    setPerson({
      name: "Beka",
      age: 28,
      hobby: "Scream at the computer",
    });
  };

  const { name, age, hobby } = person;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>

      <button className="btn" onClick={displayPerson}>
        show beka
      </button>
    </>
  );
};

export default UseStateObject;
