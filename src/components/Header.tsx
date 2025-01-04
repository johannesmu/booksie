import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import {Navigation} from "./Navigation"
import NavData from "../data/main-navigation.json"

export function Header(props: any) {
    return (
        <Navbar expand="lg" data-bs-theme="dark" bg="dark">
            <Container fluid >
                <Navbar.Brand>
                    <a className="text-light" href="/">{props.title}</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Form className="d-flex flex-fill flex-direction-row mx-md-4 my-2" style={{maxWidth:'500px'}}>
                    <InputGroup>
                        <Form.Label className="visually-hidden">Search</Form.Label>
                        <Form.Control type="search" />
                        <Button variant="primary">Search</Button>
                    </InputGroup>
                </Form>
                <Navbar.Collapse id="main-nav" className="flex-md-grow-0">
                    <Navigation data={NavData}/>
                    {/* <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

