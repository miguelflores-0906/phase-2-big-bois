import React from 'react'
import './components.css'
import Loginbtn from './Loginbtn'

const Login = () => {

    return (
        <div>
            <div id = "navbar">
                <p id = "login-logo">THE GAME FORUM</p>
            </div>
            <div id = "login">
                <Loginbtn/>
            </div>
        </div>

    )
}

export default Login