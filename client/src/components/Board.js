import Boardlist from './Boardlist'
import {FaFeather} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Post from './Post'
import Navbar from './Navbar'
const Board = () => {
    return (
        <div> 
            <Navbar/>
        <div className="board-name">
            <div className="board-header">
                <h1>BOARD NAME</h1>
                <Link to="/newpost">
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
        </div>
    )
}

export default Board