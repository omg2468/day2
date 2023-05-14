import { useState, createContext } from "react";
import Content from "./Content";

import "./App.css";

// 1. Creat context
// 2. Provider
// 3. Consumer

export const ThemeContext = createContext();

console.log(ThemeContext);

function App() {
  const [count, setCount] = useState('light');
  const toogleTheme = () => {
    setCount(count === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContext.Provider value={count}>
      <div style={{ padding: 20 }}>
        <button onClick={toogleTheme}>Toogle them</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
