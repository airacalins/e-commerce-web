import { Container, Nav, Navbar } from "react-bootstrap";

export default function AppBar() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand className="ps-2">E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" />
                <Nav>
                    <Nav.Link>More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}