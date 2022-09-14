import { Product } from "../../app/model/product"

interface CatalogProps {
  products: Product[];
}

export default function Catalog({products}: CatalogProps) {
  return (
    <>
      <h1>Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </>
  )
}