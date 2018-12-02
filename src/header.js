import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

function header() {
    return (
        <header className='navbar-default'>
            <nav className='collapse navbar-collapse' role='navigation'>
                <ul className='nav navbar-nav navbar-right nav-main'>
                    <li><a>Comics</a></li>
                    <li><a>Heroes</a></li>
                    <li><a>About</a></li>
                </ul>
            </nav>
        </header>
    )
};

export { header };