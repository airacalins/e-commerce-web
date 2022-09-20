import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Product } from "../../../app/model/product";

interface IProps {
    product: Product;
}

export default function ProductCard({ product }: IProps) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}