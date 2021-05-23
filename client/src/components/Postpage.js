import Boardpost from './Boardpost'
import Boardreply from './Boardreply'
import Navbar from './Navbar'
import Reply from './Reply'
const Postpage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className='board-name'>BOARD NAME</h1>
                <Boardpost />
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
