import Boardpost from './Boardpost'
import Boardreply from './Boardreply'
import Navbar from './Navbar'
import Reply from './Reply'
import {useState} from 'react'
import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaReply} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Postpage = (props, {match}) => {
    console.log({match})

    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }

    useState()
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className='board-name'>{props.location.board}</h1>
                {/* <Boardpost
                    id = {props.location.id} 
                    title = {props.location.title}
                    body = {props.location.body}
                    score = {props.location.score}
                    username = {props.location.username}/> */}
                <div className='board-post'>
            <h1>{props.location.title}</h1>
            <p>
                {props.location.body}
            </p>
            <div className='board-post-footer'>
                <div className='username'>
                    <Link style = {navStyle} to = {{
                        pathname: `/profile/${props.location.username}`
                    }}>
                        {props.location.username}
                    </Link>
                </div>
                <div className='post-btn'>
                    <FaArrowUp />
                    <div className="board-post-score">{props.location.score}</div>
                    <FaArrowDown />
                    <FaReply />
                    <FaTrash />
                </div>
                {/* <Postbtn /> */}
            </div>
        </div>
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
