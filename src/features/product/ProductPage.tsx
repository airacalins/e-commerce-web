import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/model/product"
import Loading from "../../components/Loading";
import ProductList from "../product/components/ProductList";



export default function ProductPage() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Product.list()
      .then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [])

  if (loading) return <Loading message="Loading Products" />;


  return (
    <ProductList products={products} />
  )
}