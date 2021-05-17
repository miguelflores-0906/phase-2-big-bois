import Boardlist from './Boardlist'
import Navbar from './Navbar'
const Dashboard = () => {
    return (
        <div>
            <Navbar />
        <div className='board-name'>
            <h1>BOARDS</h1>
            <Boardlist />
        </div>
        </div>
    )
}

export default Dashboard
