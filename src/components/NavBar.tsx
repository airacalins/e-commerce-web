import { AppBar, Link, Toolbar, Typography } from "@mui/material"


export default function NavBar() {
    const navLinks = [
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
        { path: '/product', title: 'Product' },
    ]

    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">E-commerce</Typography>
            </Toolbar>
            {navLinks.map(({ path, title }) => <Link href={path}>{title}</Link>)}
        </AppBar>
    )
}