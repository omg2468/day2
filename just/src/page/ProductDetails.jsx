import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState([])

  const {productId} = useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [productId]);

  console.log(product);

  return (
    <div>
      <h3>ProductDetails {productId}</h3>
      <p>{product.title}</p>
      
    </div>
  );
}
