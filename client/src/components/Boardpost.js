// import Postbtn from './Postbtn'
import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaReply} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'

const Boardpost = (props) => {
    console.log(props)
    return (
        
        <div className='board-post'>
            <h1>{props.title}</h1>
            <p>
                {props.body}
            </p>
            <div className='board-post-footer'>
                <div className='username'>{props.username}</div>
                <div className='post-btn'>
                    <FaArrowUp />
                    <div className="board-post-score">0</div>
                    <FaArrowDown />
                    <FaReply />
                    <FaTrash />
                </div>
                {/* <Postbtn /> */}
            </div>
        </div>
    )
}

export default Boardpost
