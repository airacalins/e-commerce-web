import { Product } from "../../app/model/product"
import NavPageContainer from "../../components/NavPageContainer";
import ProductList from "../product/components/ProductList";

interface IProps {
    products: Product[];
}

export default function ProductPage({ products }: IProps) {
    return (
        <NavPageContainer>
            <ProductList products={products} />
        </NavPageContainer>
    )
}