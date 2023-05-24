import { useReducer, useState } from "react";
import "./App.css";

// Init state
const initState = 0;


const reducer = (state, action) => {
  switch (action) {
    case 'up':
      return state + 1;
    case 'down':
      return state - 1;
    default:
      throw new Error("ko hợp lệ");
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch('down')}>Down</button>
      <button onClick={() => dispatch('up')}>Up</button>
    </div>
  );
}

export default App;
