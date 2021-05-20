import Boardlist from './Boardlist'
import {FaFeather} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Post from './Post'

const Board = () => {
    return (
        <div className="board-name">
            <div className="board-header">
                <h1>BOARD NAME</h1>
                <Link to="/">
                    <div className='new-post'>
                        <FaFeather />
                    </div>
                </Link>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Board
