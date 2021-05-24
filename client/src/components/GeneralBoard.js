import {FaFeather} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Post from './Post'
import Navbar from './Navbar'
import axios from 'axios';
import { useState, useEffect } from 'react'
import React from 'react'

const GeneralBoard = () => {
    
    var postArray


    useEffect(() => {
        axios.post('http://localhost:5000/getPost', {board: "general"})
            .then(res => {
                console.log(res);
                postArray = res; 
                console.log(postArray)
            })
            .catch(err => {
                console.error(err);
            })
    })

    // state = {postArray}

    return (
        <div> 
            <Navbar/>
        <div className="board-name">
            <div className="board-header">
                <h1>GENERAL</h1>
                <Link to="/newpost">
                    <div className='new-post'>
                        <FaFeather />
                    </div>
                </Link>
            </div>
            
            {/* append or render the posts here */}
            <div className='posts'>
                <ul>
                    {/* <Post /> */}
                    {
                        // this.state.postArray.map((post, index) => {
                        //     return(
                        //         <Post 
                        //             title = {post.title}
                        //         />
                        //     )
                        // })
                    }
                </ul>
                {/* <button onClick={() => test_method()}>press me</button> */}
            </div>
        </div>
        </div>
    )
}

export default GeneralBoard
