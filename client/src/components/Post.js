import './components.css'
import {Link} from 'react-router-dom'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {VscChevronUp} from 'react-icons/vsc'
import {VscChevronDown} from 'react-icons/vsc'

const Post = (props) => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }
    console.log(props)

    return (
        <li>
            <div className='post'>
                
                    
                <div className='score'>
                    <VscChevronUp 
                        style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}} 
                    />
                    <p>{props.score}</p>
                    <VscChevronDown 
                        style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}}
                    />
                </div>
                <div className='postBody'>
                    <Link style={navStyle} to = {{
                        pathname: "/postpage",
                        id: props.id,
                        title: props.title,
                        body: props.body,
                        score: props.score,
                        username: props.username
                        }}>
                    <div className='proper'>
                        <h2>{props.title}</h2>
                        <p>{props.body}</p>
                    </div>
                    </Link>
                    <div className='username'><Link style={navStyle} to ="/profile">
                        {props.username}
                    </Link></div>
                    
                </div>
                    
                
            </div>
        </li> 
    )
}

export default Post
