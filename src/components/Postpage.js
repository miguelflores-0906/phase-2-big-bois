import Boardpost from './Boardpost'
import Boardreply from './Boardreply'

const Postpage = () => {
    return (
        <div>
            <h1 className='board-name'>BOARD NAME</h1>
            <Boardpost />
            <Boardreply />
        </div>
    )
}

export default Postpage
