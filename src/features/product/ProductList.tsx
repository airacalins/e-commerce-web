import ListGroup from 'react-bootstrap/ListGroup';
import { Product } from "../../app/model/product";

interface IProps {
    products: Product[];
}

export default function ProductList({ products }: IProps) {
    return (
        <ListGroup>
            {products.map((product) => (
                <ListGroup.Item key={product.id}>{product.name} - {product.price}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}