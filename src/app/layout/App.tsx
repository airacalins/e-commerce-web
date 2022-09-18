import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../model/product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <>
      <h1>E-commerce</h1>
      <Catalog products={products} />
    </>
  );
}

export default App;
