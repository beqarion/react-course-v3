import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Susan");
  return <>{name && <h2>short circuit overview</h2>}</>;
};
export default ShortCircuitOverview;
