import React, { useState } from "react";

export default function Ticket({ name }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={increment}>add</button>
      <h3 className="test">{count}</h3>
    </div>
  );
}
