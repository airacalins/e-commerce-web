import { DarkMode } from "@mui/icons-material";
import { AppBar, Link, Switch, Toolbar, Typography } from "@mui/material"

interface IProps {
    isDarkMode: boolean,
    handleThemeChange: () => void;
}

export default function NavBar({ isDarkMode, handleThemeChange }: IProps) {
    const navLinks = [
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
        { path: '/product', title: 'Product' },
    ]

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6">E-commerce</Typography>
            </Toolbar>
            {navLinks.map(({ path, title }) => <Link href={path}>{title}</Link>)}
            <Switch checked={isDarkMode} onChange={handleThemeChange} />
        </AppBar>
    )
}