import Nav from 'react-bootstrap/Nav'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Navigation(props: any) {
    const [items, setItems] = useState([])

    useEffect(() => {
        if (props.source && items.length == 0) {

            fetch(props.source)
                .then((res) => res.json())
                .then((data) => setItems(data))
        }
    }, [props.source])

    if (items.length > 0) {
        const NavItems: any = items.map((obj: any, key: number) => {
            if (obj.group == props.group) {
                return (
                    <Nav.Link as={Link} to={obj.route} key={key}>{obj.name}</Nav.Link>
                )
            }
        })
        return <Nav as="nav" className={ props.classes }>{NavItems}</Nav>
    }
    else {
        return null
    }
}