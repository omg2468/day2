import { useEffect, useRef } from "react";

import Video from "./page/Video";
import Home from "./page/Home";
import "./App.css";

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video ref={videoref} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
