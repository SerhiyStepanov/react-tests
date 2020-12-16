import { useState, useEffect } from "react";

export default function CounterHook() {
  const [incrementA, setAIncrement] = useState(0);
  const [incrementB, setIBIcrement] = useState(0);

  const total = incrementA + incrementB;
  const handleAIncrement = () => {
    setAIncrement((state) => state + 1);
  };

  const handleBIcrement = () => {
    setIBIcrement((state) => state + 1);
  };

  useEffect(() => {
    const total = incrementA + incrementB;
    document.title = `click ${total} times`;
  }, [incrementA, incrementB]);

  return (
    <>
      <button
        style={{ backgroundColor: "#2f4f6f", padding: "10px 20px" }}
        type="button"
        onClick={handleAIncrement}
      >
        click {incrementA}
      </button>

      <span>{total}</span>

      <button
        style={{ backgroundColor: "#2f4f6f", padding: "10px 20px" }}
        type="button"
        onClick={handleBIcrement}
      >
        click {incrementB}
      </button>
    </>
  );
}
