import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../../app/model/product";

interface IProps {
    product: Product;
}

export default function ProductCard({ product }: IProps) {
    const { name, description, price, pictureUrl, type, brand } = product;

    return (
        <Card elevation={5}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>{name.charAt(0).toUpperCase()}</Avatar>}
                title={name}
                titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'primary.main' } }}
            />
            <CardMedia component="img" height="140" alt={name} sx={{ backgroundSize: 'contain', bgcolor: 'primary.light' }} image={pictureUrl} />
            <CardContent>
                <Typography variant="h5" color="text.secondary">${(price / 100).toFixed(2)}</Typography>
                <Typography variant="body2" color="text.secondary">{brand} / {type}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}