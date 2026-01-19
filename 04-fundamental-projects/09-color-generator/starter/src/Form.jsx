import { useState } from "react";

function Form({ onColorAdd }) {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onColorAdd(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          type="text"
          name="color-input"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}
export default Form;
