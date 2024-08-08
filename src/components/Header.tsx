import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

export function Header(props: any) {
    return (
        <Navbar>
            <Container fluid >
                <Navbar.Brand>
                    <a href="#">{props.title}</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Form className="flex-fill">
                    <Form.Label className="visually-hidden">Search</Form.Label>
                    <Form.Control type="search" />
                </Form>
                <Navbar.Collapse id="main-nav">
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

