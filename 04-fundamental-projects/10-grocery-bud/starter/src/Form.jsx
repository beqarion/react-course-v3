import { useState } from "react";

function Form({ addItem }) {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </div>
    </form>
  );
}
export default Form;
