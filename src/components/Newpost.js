import {Link} from 'react-router-dom'
import Navbar from './Navbar'
const Newpost = () => {
    return (
        <div>
            <Navbar />
            <div className='board-post'>
                <form>
                    <input type="text" placeholder='Title' className='title-input'></input>
                    <br></br>
                    <textarea name='post-body' className='post-body' placeholder='Type in your post here'></textarea>
                    <br></br>
                    <label>Choose a board to place this thread: </label>
                    <select name='board-select' className='board-select'>
                        <option value='general'>General</option>
                        <option value='esports'>E-sports</option>
                        <option value='news'>News</option>
                        <option value='social'>Social</option>
                        <option value='retro'>Retro</option>
                        <option value='tabletop'>Tabletop</option>
                        <option value='tech'>Tech</option>
                        <option value='rigs'>Rigs</option>
                        <option value='support'>Support</option>
                    </select>
                </form>

                <input type='submit' className='submit-btn'></input>

                {/* find out how to do previous page using react : ) */}
                <Link to='/Dashboard' style={{textDecoration: 'none',}}>
                    <div className='cancel-butt'>
                        cancel
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Newpost
