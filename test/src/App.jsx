import { useEffect, useState } from "react";
import "./App.css";
const but = ["posts", "comments", "albums"];

function App() {
  const [data, setData] = useState([]);
  const [tit, setTit] = useState('posts')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tit}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [tit]);

  let listitem = data.map((e) => <li key={e.id}>{e.title || e.id}</li>);
  let allbut = but.map((but,index) => <button key={index} onClick={({target}) => {
    setTit(target.innerHTML)
  }}>{but}</button>)
  return (
    <div>
      {allbut}
      {listitem}
    </div>
  );
}

export default App;
