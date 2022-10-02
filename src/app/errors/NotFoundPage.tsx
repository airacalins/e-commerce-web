import { Button, Container, Link, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();
    return <>
        <Container component={Paper} sx={{ height: '50' }}>
            Opps - we could not find what you are looking for
        </Container>
        <Button onClick={() => navigate('/products')}>Go back to shop</Button>
    </>
}