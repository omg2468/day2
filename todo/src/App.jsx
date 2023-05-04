import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  useEffect(() => {
    const getTodo = async () => {
      const res = await fetch("http://localhost:3000/todos");
      const getres = await res.json();
      setData(getres);
    };
    getTodo();
  });
  console.log(data);
  return <div></div>;
}

export default App;
