import React from 'react'
// import logo from '../graphics/logo-white.png'
import Navsearch from './Navsearch'
import Navbbtn from './Navbtn'

const Navbar = () => {
    return (
        <div className='navbar'>
            <a className="logo">
                THEGAMEFORUM
            </a>
            <Navsearch />
            <Navbbtn />
        </div>
    )
}

export default Navbar
