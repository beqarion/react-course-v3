import { useState } from "react";

function SingleItem({ item, removeItem, onCheckItem }) {
  const { name, id, completed } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          onCheckItem(id, e.target.checked);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        delete
      </button>
    </div>
  );
}
export default SingleItem;
