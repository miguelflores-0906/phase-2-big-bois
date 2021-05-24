import Boardpost from './Boardpost'
import Boardreply from './Boardreply'
import Navbar from './Navbar'
import Reply from './Reply'
const Postpage = (props) => {
    console.log(props.location.id)
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className='board-name'>{props.location.board}</h1>
                <Boardpost
                    id = {props.location.id} 
                    title = {props.location.title}
                    body = {props.location.body}
                    score = {props.location.score}
                    username = {props.location.username}/>
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
