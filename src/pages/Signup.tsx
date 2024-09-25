import React, { useState, useEffect, ReactHTMLElement} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Signup(props: any) {
    const [ email,setEmail] = useState('')
    const [ password, setPassword ] = useState('')
    // validation states
    const [ validEmail,setValidEmail] = useState()
    const [ validPassword, setValidPassword ] = useState()
    const [ pwcount, setPwCount] = useState()

    useEffect(
        () => {
            if( password.length > 0 ) {
                setPwCount( password.length )
            }
        },
        [password]
    )

    const formSubmit = ( event: React.SyntheticEvent ) => {
        event.preventDefault()
    }

    const validateEmail = () => {

    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        <h2>Sign up for an account</h2>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                name="email"
                                type="email" 
                                placeholder="you@example.com" 
                                aria-label="email address" 
                                value={email}
                                onChange={ (event: React.FormEvent<HTMLInputElement>):void => setEmail( (event.target as HTMLInputElement ).value }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name="password"
                                type="password" 
                                placeholder="at least 8 characters" 
                                aria-label="password at least 8 character long" 
                            />
                        </Form.Group>
                        <div className="d-grid my-3">
                            <Button 
                                type="submit" 
                                variant="dark" 
                                name="signup"
                            >
                                Sign up
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={{ span: 4, offset: 4 }}>

                </Col>
            </Row>
        </Container>
    )
}