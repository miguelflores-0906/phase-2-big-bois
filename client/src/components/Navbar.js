import React from 'react'
// import logo from '../graphics/logo-white.png'
import Navsearch from './Navsearch'
import Navbbtn from './Navbtn'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link style={{textDecoration: 'none', marginTop: '8px'}} to="/dashboard">
                <div className="logo">
                    THEGAMEFORUM
                </div>
            </Link>
            <Navsearch />
            <Navbbtn />
        </div>
    )
}

export default Navbar
