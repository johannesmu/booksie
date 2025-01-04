import Nav from "react-bootstrap/Nav"
export function Navigation( props:any ) {
  if( props.data ) {
    const NavItems = props.data.map( ( navitem ) => {
      return (
        <Nav.Link>{ navitem.name }</Nav.Link>
      )
    })
    return (
      <Nav>
        {NavItems}
      </Nav>
    )
  }
}