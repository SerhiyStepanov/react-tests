import { useState, useEffect } from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

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
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#2f4f6f",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        type="button"
        onClick={handleAIncrement}
      >
        click {incrementA}
        <FiThumbsUp style={{ marginLeft: "10px", fill: "#ffffff" }} />
      </button>

      <span style={{ marginLeft: "20px", marginRight: "20px" }}>{total}</span>

      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#2f4f6f",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        type="button"
        onClick={handleBIcrement}
      >
        click {incrementB}
        <FiThumbsDown style={{ marginLeft: "10px", fill: "#ffffff" }} />
      </button>
    </>
  );
}
