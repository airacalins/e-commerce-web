import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";

interface IProps {
    isDarkMode: boolean,
    handleThemeChange: () => void;
}

export default function NavBar({ isDarkMode, handleThemeChange }: IProps) {
    const midLinks = [
        { path: '/product', title: 'Product' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
    ];

    const rightLinks = [
        { path: '/login', title: 'Login' },
        { path: '/register', title: 'Register' },
    ];

    const navStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const navItemsStyles = {
        color: 'inherit',
        typography: 'h6',
        textDecoration: 'none',
        '&:hover': {
            color: 'secondary.main'
        },
        '&.active': {
            color: 'text.secondary',
        }
    }

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={navStyles}>
                <Typography
                    variant="h6"
                    sx={navItemsStyles}
                    component={NavLink}
                    to='/'
                >
                    E-commerce
                </Typography>

                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ path, title }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navItemsStyles}
                        >
                            {title}
                        </ListItem>
                    ))}
                    <IconButton size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={4} color='secondary' />
                        <ShoppingCart />
                    </IconButton>
                </List>

                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ path, title }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navItemsStyles}
                        >
                            {title}
                        </ListItem>
                    ))}
                    <Switch checked={isDarkMode} onChange={handleThemeChange} />
                </List>
            </Toolbar>
        </AppBar>
    )
}