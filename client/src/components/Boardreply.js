import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaReply} from 'react-icons/fa'

const Boardreply = (props) => {
    return (
        <li key = {props.key}>
            <div className='board-post'>
                <div className='reply'>
                    in reply to username
                </div>
                <p>
                    {props.body}
                </p>
                <div className='username'>
                    {props.poster_username}
                </div>
                <div className='post-btn'>
                    <FaArrowUp />
                    {props.gamerscore}
                    <FaArrowDown />
                    <FaReply />
                </div>
            </div>
        </li>
    )
}

export default Boardreply
