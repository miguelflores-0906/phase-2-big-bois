import React from 'react'
import './components.css'
import { useState } from "react"
import { render } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Loginbtn() {

    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
        <div className = "container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                    Login
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    Register
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    <p className = "errormsg"></p>
                    
                    username 
                    <br></br>
                    <input type="text" className="login-form" id = "loguser"></input> 
                    <br></br>
                    <br></br>
                    password
                    <br></br>
                    <input type="text" className="login-form" id = "logpass"></input> 
                    <br></br>
                    <br></br>
                    <Link to = "/dashboard">
                        <button id = "login-button">Log In</button>
                    </Link>
                    <br></br>
                    

                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                    
                    <p className = "errormsg"></p>
                    
                    username 
                    <br></br>
                    <input type="text" className="login-form" id = "loguser"></input> 
                    <br></br>
                    <br></br>
                    password
                    <br></br>
                    <input type="text" className="login-form" id = "logpass"></input> 
                    <br></br>
                    <br></br>
                    confirm password
                    <input type="text" className="login-form" id = "logpass"></input>
                    <br></br>
                    <br></br>
                    <Link to = "/dashboard">
                    <button id = "login-button">Register</button>
                    </Link>
                    <br></br>
                </div>
            </div>
        </div>
             

    )
}

export default Loginbtn

{/* <div className = "container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                    Login
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    Register
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    username 
                    <br></br>
                    <input type="text" className="login-form" id = "loguser"></input> 
                    <br></br>
                    <br></br>
                    password
                    <br></br>
                    <input type="text" className="login-form" id = "logpass"></input> 

                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                        
                    </div>
            </div>
        </div> */}