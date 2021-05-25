import axios from 'axios'
import React from 'react'
import './components.css'
// import ProfilePicture from '../graphics/profpic.jpg';
import Navbar from './Navbar'
import Post from './Post'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react'



// const profPic = () => {
//     return 
// }
const Profile = () => {

    const [posts, setPosts] = useState("Nothing to see here")

    const updatePosts = (postArray) => setPosts(postArray.data.map((post, index) => {
        return (
            <Post 
                title = {post.title}
                body = {post.body}
                score = {post.gamerscore}
                id = {post._id}
                username = {post.poster_username}
            />
        )
    }))

    const [username, setUsername] = useState("");
    const changeUsername = (text) => setUsername(text);

    const [gamerscore, setGamerscore] = useState("");
    const changeGamerscore = (text) => setGamerscore(text);

    useEffect(() => {
        axios.post('http://localhost:5000/getUserPosts', {username: Cookies.get("thegameforum_userLogin")})
            .then(res => {
                updatePosts(res)
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            })

        axios.post('http://localhost:5000/findUser', {username: Cookies.get("thegameforum_userLogin")})
            .then(res => {
                // console.log(res.data);
                // console.log(res.data.gamerscore);
                changeUsername(res.data.username);
                var gamerscore = res.data.gamerscore;
                gamerscore = " " + gamerscore;
                changeGamerscore(gamerscore);

            })
            .catch(err => {
                console.error(err);
            })
    })

    return (
        <div>
            <Navbar/>
            <div className='profile'>

                <div className='profile-header'>
                    <div className = 'userName'>
                        {/* TODO: Make this adjust to real Username */}
                        {username}
                    </div>
                    <div className = 'profile-header-dot'>
                        ⋅ 
                    </div>
                    <div className = 'gamerScore'>
                    {gamerscore}
                    </div>
                </div>

                {/* display the user's posts for the day here */}
                <div className="profile-posts">
                    <h1>RECENT POSTS</h1>
                    <div className='posts'>
                        <ul>
                            {posts}
                        </ul>
                    </div>
                </div>
                
                
            </div>
        </div>
    )


}

export default Profile
