import { Product } from "../../app/model/product"
import ProductList from "../product/components/ProductList";

interface IProps {
    products: Product[];
}

export default function ProductPage({ products }: IProps) {
    return (
        <ProductList products={products} />
    )
}