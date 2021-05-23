import Postscore from './Postscore'
import Postproper from './Postproper'
import './components.css'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {VscChevronUp} from 'react-icons/vsc'
import {VscChevronDown} from 'react-icons/vsc'

const Post = (props) => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }

    return (
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
                <Link style={navStyle} to ="/postpage">
                <div className='proper'>
                    <h2>{props.title}</h2>
                    <p>{props.body}</p>
                </div>
                </Link>
                <a className='username'><Link style={navStyle} to ="/profile">
                    {props.username}
                </Link></a>
                
            </div>  
        </div>
    )
}

export default Post
