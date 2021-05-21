import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaReply} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'

const Postbtn = () => {
    return (
        <div className='post-btn'>
            <FaArrowUp />
            SCORE
            <FaArrowDown />
            <FaReply />
            <FaTrash />
        </div>
    )
}

export default Postbtn
