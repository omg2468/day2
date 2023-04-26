import { useState } from "react";
import "./App.css";
import Button from "./Button";
import PropTypes from "prop-types";

function App() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prev) => prev + 1 )
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleSubtract = () => {
    setCount((prev) => prev - 1)
  }


  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={handleAdd} title="Add" />
      <Button onClick={handleReset} title="Reset" />
      <Button onClick={handleSubtract} title="Subtract" />
    </div>
  );
}

export default App;
