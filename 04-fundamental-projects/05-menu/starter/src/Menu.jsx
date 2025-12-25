import MenuItem from "./MenuItem";

export default function Menu({ items }) {
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </>
  );
}
