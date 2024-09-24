
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Navigation } from './Navigation'

export function Header(props: any) {

    return (
        <>
            <Navbar as="header" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid >
                    <Navbar.Brand href="/" className="order-0 order-sm-0">
                        {props.title}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='main-nav' className="order-2 order-sm-1" />
                    <Navbar.Collapse id="main-nav" className="flex-lg-grow-0 order-4 order-sm-2">
                        <Navigation source="/data/navigation.json" group="main" classes="test" />
                    </Navbar.Collapse>
                    <Form className="my-2 mx-sm-4 d-flex flex-sm-fill order-1 order-sm-3" >
                        <Form.Control aria-label='search term' type='search' placeholder='search' />
                        <Button variant="primary" type="submit" className="d-none d-sm-block">
                            Search
                        </Button>
                    </Form>
                    <Navigation source="/data/navigation.json" group="user" classes="d-none d-sm-flex order-3 order-sm-4" />
                </Container>
            </Navbar>
        </>
    )
}

