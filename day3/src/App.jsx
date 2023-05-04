import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setproducts(data.users);
    };
    getProduct();
  }, []);
  console.log(products);
  return (
    <table id="customers">
      <tr>
        <th>Firs tName</th>
        <th>Last Name</th>
        <th>Adress</th>
        <th>Email</th>
      </tr>
      {products.map((e) => (
        <tr key={e.id} className="info">
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.address.address}</td>
          <td>{e.email}</td>
        </tr>
      ))}
    </table>
  );
}

export default App;
