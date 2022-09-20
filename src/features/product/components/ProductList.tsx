import { Col, Row } from 'react-bootstrap';
import { Product } from "../../../app/model/product";
import ProductCard from './ProductCard';

interface IProps {
    products: Product[];
}

export default function ProductList({ products }: IProps) {
    return (
        <Row className='xs-auto align-items-center'>
            {products.map((product) => (
                <Col>
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    )
}