import Nav from 'react-bootstrap/Nav'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavigationObject } from '../interfaces/NavigationObject'


export function Navigation(props: any) {
    const [items, setItems] = useState([])

    // automatically load the navigation data
    useEffect(() => {
        if (props.source && items.length == 0) {

            fetch(props.source)
                .then((res) => res.json())
                .then((data) => setItems(data))
        }
    }, [props.source])

    // if navigation data is available return a Nav element
    if (items.length > 0) {
        // loop through navigation data loaded into items by the useEffect() and create a collection
        const NavItems: any = items.map((obj: NavigationObject, key: number) => {
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