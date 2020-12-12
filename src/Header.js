import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <div className='header'>
            <Navbar bg='dark' variant='dark' sticky='top'>
                <Navbar.Brand href='/'>Hack4She</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/blog'>Blog</Nav.Link>
                    <Nav.Link href='/locations'>Locations</Nav.Link>
                    <Nav.Link href=''>Activities</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
