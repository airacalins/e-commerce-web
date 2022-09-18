import { Product } from "../../app/model/product"
import ProductList from "../product/ProductList";

interface IProps {
  products: Product[];
}

export default function Catalog({ products }: IProps) {
  return (
    <>
      <h1>Catalog</h1>
      <ProductList products={products} />
    </>
  )
}