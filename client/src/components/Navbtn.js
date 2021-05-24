import Cookies from 'js-cookie'
import React from 'react'
// import { VscWhitespace } from 'react-icons/vsc'
import {Link} from 'react-router-dom'

const Navbtn = () => {

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    const logoutUser = () => {
        Cookies.remove('thegameforum_userLogin',{path: '/'})
        // console.log('we outty')
    }

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/dashboard">
                    <li>BOARDS</li>
                </Link>

                <Link style={navStyle} to="/profile">
                    <li>PROFILE</li>
                </Link>

                <Link style={navStyle} to ="/">
                    <li onClick={() => logoutUser()}>LOGOUT</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbtn
