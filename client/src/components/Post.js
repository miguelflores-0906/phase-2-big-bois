import Postscore from './Postscore'
import Postproper from './Postproper'
import './components.css'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Post = () => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }

    return (
        <div className='post'>
            <Postscore />
            <div className='postBody'>
                <Link style={navStyle} to ="/postpage">
                    <Postproper />
                </Link>
                <a className='username'><Link style={navStyle} to ="/profile">
                    username
                </Link></a>
                
            </div>  
        </div>
    )
}

export default Post
