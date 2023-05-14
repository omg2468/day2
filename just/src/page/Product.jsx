import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json()
  return data['products']
}

export default function Product() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    getProduct().then(setProduct);
  }, []);

  const cards = product.map(product => 
    <Link key={product.id} to={`/product/${product.id}`}>
      <article>
        <img src={product.thumbnail} alt={product.title} />

        <div className="produc-info">
          <h3>{product.title}</h3>
        </div>
      </article>
    </Link>
  )

  return (
    <div>
      <h1 className="heading">List</h1>
      {cards}
    </div>
  );
}
