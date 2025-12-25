import { useState } from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h2>useState array example</h2>
      {people.map((p) => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <button
            type="button"
            onClick={() => {
              removeItem(p.id);
            }}
          >
            remove item
          </button>
        </div>
      ))}
      <button type="button" onClick={clearAll} style={{ marginTop: "2rem" }} className="btn">
        Clear List
      </button>
    </div>
  );
};

export default UseStateArray;
