import { useState } from "react";
import data from "./data";
import People from "./People";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <People people={people} />
        <button className="btn btn-block" onClick={clearAll}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
