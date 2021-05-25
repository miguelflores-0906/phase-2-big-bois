import Postbtn from './Postbtn'
import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaReply} from 'react-icons/fa'

const Boardreply = () => {
    return (
        <div className='board-post'>
            <div className='reply'>
                in reply to username
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ultricies turpis. Donec volutpat nisi sed ultrices porta. Morbi a euismod neque. Vestibulum euismod tellus et mollis consequat. Nam rutrum mollis eleifend. Nulla eu turpis lectus. Praesent sed lacus nec lectus mollis pulvinar. Proin bibendum, odio quis porttitor mattis, lectus nisi vehicula leo, sed sollicitudin odio sem ac mauris. Vestibulum nec lacinia nisl.
            </p>
            <div className='username'>
                username
            </div>
            <div className='post-btn'>
                <FaArrowUp />
                SCORE
                <FaArrowDown />
                <FaReply />
            </div>
        </div>
    )
}

export default Boardreply
