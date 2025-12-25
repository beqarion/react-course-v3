export default function Categories({ categories, onCategoryClick }) {
  return (
    <div className="btn-container">
      {categories.map((c) => (
        <button
          key={c}
          className="btn"
          type="button"
          onClick={() => {
            onCategoryClick(c);
          }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
