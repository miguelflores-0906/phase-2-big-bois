import React from 'react'
import './components.css'
import ProfilePicture from '../graphics/profpic.jpg';
import Navbar from './Navbar'
import Post from './Post'
const profPic = () => {
    return 
}
const Profile = () => {
    
    return (
        <div>
            <Navbar />
        <div className='profile'>
            <div className = 'profPic'>
                <img id = "profpic" src={ProfilePicture}/>
            </div>

            <div className = 'userName'>
                {/* TODO: Make this adjust to real Username */}
                USERNAME ⋅ 1337
            </div>

        </div>
            <Post />
        </div>

    )
}

export default Profile
