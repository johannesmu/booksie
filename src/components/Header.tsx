
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button } from 'react-bootstrap'
export function Header(props: any) {
    return (
       <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container  fluid>
                <Navbar.Brand href="/" className="order-0">{ props.title }</Navbar.Brand>
                <Navbar.Toggle aria-controls='main-nav' className="order-2"/>
                <Navbar.Collapse id="main-nav" className="flex-lg-grow-0 order-4">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="order-3">
                    <InputGroup>
                        <Form.Control aria-label='search term' type='search' />
                        <Button variant='info' type='submit'>Search</Button>
                    </InputGroup>
                </Form>
                <Nav className="d-none">
                    <Nav.Link href="/signin">Login</Nav.Link>
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link href="/signout">Log out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
       </>
    )
}

