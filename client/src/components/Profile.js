import React from 'react'
import './components.css'
// import ProfilePicture from '../graphics/profpic.jpg';
import Navbar from './Navbar'
import Post from './Post'


const profPic = () => {
    return 
}
const Profile = () => {
    
    return (
        <div>
            <Navbar/>
            <div className='profile'>

                <div className='profile-header'>
                    <div className = 'userName'>
                        {/* TODO: Make this adjust to real Username */}
                        USERNAME
                    </div>
                    <div className = 'profile-header-dot'>
                        ⋅ 
                    </div>
                    <div className = 'gamerScore'>
                        1337
                    </div>
                </div>

                {/* display the user's posts for the day here */}
                <div className="profile-posts">
                    <h1>RECENT POSTS</h1>
                    <Post />
                </div>
                
                
            </div>
        </div>
    )
}

export default Profile
