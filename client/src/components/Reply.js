import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import {useState} from 'react';
// this form submits the input to a database to be rendered later on after submission
const Reply = () => {

    const [details, setDetails] = useState({poster_username: Cookies.get("thegameforum_userLogin"), body: "", title: Cookies.get("thegameforum_postTitle")});
    const [errorMessage, setErrorMessage] = useState("");
    const changeError = (text) => setErrorMessage(text);

    const submitHandler = e => {
        console.log("submitHandler is getting executed");
        e.preventDefault();
        console.log(details);
        
        if(details.title.length > 0)
        {
            changeError("");
            axios.post('http://localhost:5000/newReply', details)
                     .then(res => {
                         console.log(res);
                     })
                     .catch(err => {
                     console.error(err);
                     });
        }
        else
        {
            changeError("No Body");
            console.log("no Body");
        }
    }
    return (
        <div className="reply-form" onSubmit={submitHandler}>
            <div className="reply">in reply to username</div>
            <div className="errormsg">{errorMessage}</div>
            <form >
                <input type="text" placeholder="Enter your reply here" className="post-body" onChange={e => setDetails({...details, body: e.target.value})} value={details.body}></input>
                <input type="submit" className="reply-btn"></input>
            </form>
            <p className="cancel">cancel</p>
        </div>
    )
}

export default Reply
