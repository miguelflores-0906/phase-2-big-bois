import Boardpost from './Boardpost'
import Boardreply from './Boardreply'
import Navbar from './Navbar'
const Postpage = () => {
    return (
        <div>
            <Navbar/>
        <div>
            <h1 className='board-name'>BOARD NAME</h1>
            <Boardpost />
            <Boardreply />
        </div>
        </div>
       
    )
}

export default Postpage
