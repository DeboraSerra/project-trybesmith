import React, { useEffect, useState } from 'react';
import { url } from '../context/Provider';

function PLP() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts();
  }, [])

  const getProducts= async () => {
    const response = await fetch(`${url}/products`);
    const data = await response.json();
    console.log(data);
    setProducts(data);
    setLoading(false);
  }
  return (
    <h1>Oi</h1>
  )
}

export default PLP;
