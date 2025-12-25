import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  });

  if (isLoading) return <h2>Loading...</h2>;

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
