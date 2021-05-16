import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react'

const Navbtn = () => {
    return (
        <div className="navbutt">
            <div className="btndiv">
                <button>BOARDS</button>
            </div>

            <div className="btndiv">
                <a>PROFILE</a>
            </div>

            <div className="btndiv">
                <a>LOGOUT</a>
            </div>
        </div>
    )
}

export default Navbtn
