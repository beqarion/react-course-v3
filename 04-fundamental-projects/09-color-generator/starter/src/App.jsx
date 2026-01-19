import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const handleColorAdd = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      toast.error(errorMsg);
    }
  };

  return (
    <main>
      <Form onColorAdd={handleColorAdd} />
      <ColorList colors={colors} />
      <ToastContainer position="top-right" />
    </main>
  );
};
export default App;
