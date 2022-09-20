import { Container } from "react-bootstrap";
import { Product } from "../../app/model/product"
import AppBar from "../../components/AppBar";
import ProductList from "../product/components/ProductList";

interface IProps {
    products: Product[];
}

export default function ProductPage({ products }: IProps) {
    return (
        <>
            <AppBar />
            <Container>
                <ProductList products={products} />
            </Container>
        </>
    )
}