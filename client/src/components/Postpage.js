import Boardpost from './Boardpost'
// import Boardreply from './Boardreply'
import Navbar from './Navbar'
import Reply from './Reply'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Postpage = (props) => {
    // console.log(props.match.params.id)

    // const navStyle = {
    //     color: 'black',
    //     textDecoration: 'none',
    // }

    const id = props.match.params.id

    const [posts, setPosts] = useState(
        <Boardpost 
            id = "Post not rendering correctly"
            title = "Post not rendering correctly"
            body = "Post not rendering correctly"
            score = "Post not rendering correctly"
            username = "Post not rendering correctly"
            board = "Post not rendering correctly"
        />
    )

    const updatePost = (post) => {
        setPosts(
            <Boardpost 
                id = {post._id}
                title = {post.title}
                body = {post.body}
                score = {post.gamerscore}
                username = {post.poster_username}
                board = {post.board}
        /> 
        )
    }

    const [boardname, setBoardname] = useState("board.name")

    const updateBoardname = (post) => {
        setBoardname(post.board)
    }

    const [new_reply, setReply] = useState(
        <Reply op = 'default' />
    )

    const updateReplyUsername = (poster_username) => {
        setReply(
            <Reply op = {poster_username} />
        )
    }

    // const [replies, setReplies] = useState(
    //     <li>This post has no replies yet</li>
    // )

    // const updateReplies = (repArray) => setReplies(repArray.data.map((rep, index) => {
    //     return (
    //         <Boardreply 
    //             body = {rep.body}
    //             poster_username = {rep.poster_username}
    //             gamerscore = {rep.gamerscore}
    //             key = {index}
    //         />
    //     )
    // }))

    useEffect(() => {
        axios.post('http://localhost:5000/idGetPost', {_id: id})
            .then(res => {
                updatePost(res.data)
                updateBoardname(res.data)
                updateReplyUsername(res.data.poster_username)
                // console.log(id)
                // console.log(res)
            })
            .catch(err => {
                console.error(err);
            })

        // TODO: get all replies
    })

    return (
        <div>
            <Navbar/>
            <div>
                <h1 className='board-name'>
                    {boardname}
                </h1>
                {posts}
            </div>

            {/* append replies here */}
            <div className='post-page-replies'>
                {/* <Boardreply /> */}
                {new_reply}
                <div className='posts'>
                    <ul>
                        {/* {replies} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Postpage
