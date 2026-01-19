import SingleItem from "./SingleItem";

function Items({ items, removeItem, onCheckItem }) {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          onCheckItem={onCheckItem}
        />
      ))}
    </div>
  );
}
export default Items;
