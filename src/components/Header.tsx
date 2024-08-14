import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"

export function Header(props: any) {
    return (
        <Navbar expand="lg" className="bg-body-secondary justify-content-between">
            <Container fluid >
                <Navbar.Brand>
                    <a href="#">{props.title}</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Form className="flex-grow-0 d-flex" role="search" style={{ maxWidth: "100vw", minWidth: "40vw" }}>
                    <InputGroup>
                        <Form.Label className="visually-hidden">Search</Form.Label>
                        <Form.Control type="search" />
                        <Button>Search</Button>
                    </InputGroup>
                </Form>
                <Dropdown>
                    <Dropdown.Toggle id="account-dd">
                        Hey
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="secondary">
                        <Dropdown.Item>
                            <Nav.Link href="/favourites">Favourites</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Nav.Link href="/account">Account</Nav.Link>
                            </Dropdown.Item>
                        <Dropdown.Item><Nav.Link href="/basket">Basket</Nav.Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Collapse id="main-nav" className="flex-grow-0">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

