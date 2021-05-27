// import Postbtn from './Postbtn'
import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaReply} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Boardpost = (props) => {
    // console.log(props)

    const navStyle = {
        color: '#535252',
        textDecoration: 'none',
    }

    return (
        
        <div className='board-post'>
            <h1>{props.title}</h1>
            <p>
                {props.body}
            </p>
            <div className='board-post-footer'>
                <div className='username'><Link style={navStyle} to = {{
                        pathname: `/profile/${props.username}`
                    }}>
                    {props.username}
                    </Link>
                </div>
                {/* <Postbtn /> */}
            </div>
        </div>
    )
}

export default Boardpost
