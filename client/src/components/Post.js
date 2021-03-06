import './components.css'
import {Link} from 'react-router-dom'

const Post = (props) => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }

    const navStyle2 = {
        color: '#535252',
        textDecoration: 'none',
    }
    // console.log(props)

    return (
        <li key = {props.key}>
            <div className='post'>
                
                    
                {/* <div className='score'>
                    <VscChevronUp 
                        style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}} 
                    />
                    <p>{props.score}</p>
                    <VscChevronDown 
                        style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}}
                    />
                </div> */}
                <div className='postBody'>
                    <Link style={navStyle} to = {{
                        pathname: `/postpage/${props.id}`,
                        id: props.id,
                        title: props.title,
                        body: props.body,
                        score: props.score,
                        username: props.username,
                        board: props.board
                        }}>
                    <div className='proper'>
                        <h2>{props.title}</h2>
                        <p>{props.body}</p>
                    </div>
                    </Link>
                    <div className='username'><Link style={navStyle2} to = {{
                        pathname: `/profile/${props.username}`
                    }}>
                        {props.username}
                    </Link></div>
                    
                </div>
                    
                
            </div>
        </li> 
    )
}

export default Post
