import { useEffect, useState } from "react";
import ProductPage from "../../features/product/ProductPage";
import { Product } from "../model/product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <ProductPage products={products} />
  );
}

export default App;
