import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Tambah</button>
    </div>
  );
}

export default App;
