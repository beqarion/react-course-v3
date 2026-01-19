import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
  localStorage.setItem("groceryItems", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("groceryItems")) || []
  );

  const addItem = (itemName) => {
    if (itemName) {
      const item = { name: itemName, completed: false, id: nanoid() };
      setItems((prevItems) => {
        const newItems = [...prevItems, item];
        setLocalStorage(newItems);
        return newItems;
      });
      toast.success("item added to the list");
    } else {
      toast.error("please provide value");
    }
  };

  const removeItem = (id) => {
    try {
      const newItems = items.filter((i) => i.id !== id);
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success("item deleted");
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      toast.error(errorMsg);
    }
  };

  const handleCheckItem = (id, completed) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-right" />
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        onCheckItem={handleCheckItem}
      />
    </section>
  );
};

export default App;
