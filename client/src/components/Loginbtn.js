import React from 'react'
import './components.css'
import { render } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {useState} from 'react';

//code below is for logging in and registering

//end of code for login and register

function Loginbtn(Login, error) {

    const [details, setDetails] = useState({username: "", password: "", confirm: ""});

    const [registerErrorMessage, setRegisterErrorMessage] = useState("");
    const [loginErrorMessage, setLoginErrorMessage] = useState("");

    const changeRegisterError = (text) => setRegisterErrorMessage(text);
    const changeLoginError = (text) => setLoginErrorMessage(text);

    var usernameError = "name has the wrong format";
    var passwordError = "password has the wrong format";
    var confirmError = "password and confirm are not the same";

    const registerSubmitHandler = e => {
        e.preventDefault();
        console.log(details);
        if(details.confirm == details.password)
        {
            changeRegisterError("");
            if(details.username.length <= 8)
            {
                changeRegisterError("");
                if(details.password.length < 20)
                {
                    changeRegisterError("");
                    axios.post('http://localhost:5000/register', details)
                     .then(() => console.log('User Registered'))
                     .catch(err => {
                     console.error(err);
                     });
                }
                else
                {
                    changeRegisterError(passwordError);
                }
            }
            else
            {
                changeRegisterError(usernameError);
            }
        }
        else
        {
            changeRegisterError(confirmError);
        }
    }

    const loginSubmitHandler = e => {
        e.preventDefault();
        console.log(details);
        if(details.username.length > 0)
        {
            changeLoginError("");
            if(details.password.length > 0)
            {
                changeLoginError("");
                axios.post('http://localhost:5000/login', details)
                     .then(res => {
                         console.log(res);
                         if(res.data == "login works")
                         {
                             console.log("yay it works");
                         }
                         else
                         {
                             console.log("it dosent work");
                         }
                     })
                     .catch(err => {
                     console.error(err);
                     });
            }
            else
            {
                changeLoginError("no password");
            }
        }
        {
            changeLoginError("no username");
        }
    }

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
                    <p className = "errormsg">{loginErrorMessage}</p>
                    <form onSubmit={loginSubmitHandler}>
                    username 
                    <br></br>
                    <input type="text" className="login-form" id = "loguser" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input> 
                    <br></br>
                    <br></br>
                    password
                    <br></br>
                    <input type="password" className="login-form" id = "logpass" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input> 
                    <br></br>
                    <br></br>
                    {/* <Link to = "/dashboard"> */}
                        <button id = "login-button" type="submit">Log In</button>
                    {/* </Link> */}
                    <br></br>
                    </form>

                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                    
                    <p className = "errormsg" >{registerErrorMessage}</p>
                    <form onSubmit={registerSubmitHandler}>
                    username 
                    <br></br>
                    <input type="text" className="login-form" id = "loguser" name="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input> 
                    <br></br>
                    <br></br>
                    password
                    <br></br>
                    <input type="password" className="login-form" id = "logpass" name="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input> 
                    <br></br>
                    <br></br>
                    confirm password
                    <input type="password" className="login-form" id = "logpass" name="confirm" onChange={e => setDetails({...details, confirm: e.target.value})} value={details.confirm}></input>
                    <br></br>
                    <br></br>
                    {/* <Link to = "/dashboard"> */}
                    <button id = "login-button" type="submit">Register</button>
                    {/* </Link> */}
                    <br></br>
                    </form>
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