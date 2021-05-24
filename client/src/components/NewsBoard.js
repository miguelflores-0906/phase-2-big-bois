import {FaFeather} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Post from './Post'
import Navbar from './Navbar'
const NewsBoard = () => {
    return (
        <div> 
            <Navbar/>
        <div className="board-name">
            <div className="board-header">
                <h1>NEWS</h1>
                <Link to="/newpost">
                    <div className='new-post'>
                        <FaFeather />
                    </div>
                </Link>
            </div>
            
            {/* append or render the posts here */}
            <div className='posts'>
                <ul>
                    <Post title="This is a title" body="sample body" score="0" username="username"/>
                    <Post title="This is a title" body="sample body" score="0" username="username"/>
                    <Post title="This is a title" body="sample body" score="0" username="username"/>
                    <Post title="This is a title" body="sample body" score="0" username="username"/>
                </ul>
                
            </div>
        </div>
        </div>
    )
}

export default NewsBoard
