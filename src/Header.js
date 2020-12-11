import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <div className='header'>
            <Navbar bg='dark' variant='dark' sticky='top'>
                <Navbar.Brand href='#home'>Hack4She</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href=''>Blog</Nav.Link>
                    <Nav.Link href=''>Locations</Nav.Link>
                    <Nav.Link href=''>Activities</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
