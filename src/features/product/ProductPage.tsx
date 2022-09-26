import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/model/product"
import ProductList from "../product/components/ProductList";



export default function ProductPage() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      agent.Product.list().then(products => setProducts(products));
    }, [])
    
    return (
        <ProductList products={products} />
    )
}