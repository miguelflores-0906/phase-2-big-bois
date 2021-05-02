import React from 'react'
import { VscWhitespace } from 'react-icons/vsc'
import {Link} from 'react-router-dom'

const Navbtn = () => {

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/board">
                    <li>BOARDS</li>
                </Link>

                <Link style={navStyle} to="/profile">
                    <li>PROFILE</li>
                </Link>

                <Link style={navStyle} to ="/">
                    <li>LOGOUT</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbtn
