import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
  return (
    <Navbar variant="dark" bg="dark">
        <Container>
            <Navbar.Brand>
                <img src="https://epicode.com/wp-content/uploads/2022/06/EPICODE-2.0-LOGO-15.png" width={130} height={30} className='d-inline-block align-top' alt="" />
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Nav;
