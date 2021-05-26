import Boardpost from './Boardpost'
import Boardreply from './Boardreply'
import Navbar from './Navbar'
import Reply from './Reply'
import Post from './Post'
import {useState, useEffect} from 'react'
import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaReply} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import axios from 'react'

const Postpage = (props) => {
    console.log(props.match.params.id)

    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }

    const id = props.match.params.id
    const [posts, setPosts] = useState("Nothing to see here")

    const updatePosts = (postArray) => setPosts(postArray.data.map((post, index) => {
        return (
            <Boardpost 
                id = {post._id}
                title = {post.title}
                body = {post.body}
                score = {post.gamerscore}
                username = {post.poster_username}
                board = {post.board}
            />
        )
    }))

    useEffect(() => {
        axios.post('http://localhost:5000/idGetPost', {_id: id})
            .then(res => {
                updatePosts(res)
            })
            .catch(err => {
                console.error(err);
            })
    })

    return (
        <div>
            <Navbar/>
            <div>
                <h1 className='board-name'></h1>
                {posts}
            </div>

            {/* append replies here */}
            <div className='post-page-replies'>
                <Boardreply />
                <Reply />
            </div>
        </div>
    )
}

export default Postpage
