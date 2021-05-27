import './components.css'
import {Link} from 'react-router-dom'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {VscChevronUp} from 'react-icons/vsc'
import {VscChevronDown} from 'react-icons/vsc'
import {useEffect, useState, useCallback} from 'react'

const Post = (props) => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }
    // console.log(props)
    const [count, setCount] = useState(props.score)
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const OnIncrementClick = useCallback((e) => {
        if(isLiked === false && isDisliked === false){
            setCount(count+1);
            setIsLiked(!isLiked);
        }
        else if(isLiked === false && isDisliked === true){
            setCount(count+2);
            setIsLiked(!isLiked);
            setIsDisliked(!isDisliked);
        }
        else{
            setCount(count-1);
            setIsLiked(!isLiked);
        }
    }, [count]);

    const OnDecrementClick = useCallback((e) => {
        if(isDisliked === false && isLiked === false){
            setCount(count-1);
            setIsDisliked(!isDisliked);
        }
        else if(isDisliked === false && isLiked === true){
            setCount(count-2);
            setIsLiked(!isLiked);
            setIsDisliked(!isDisliked);
        }
        else{
            setCount(count+1);
            setIsDisliked(!isDisliked);
        }
    }, [count])
    return (
        <li key = {props.key}>
            <div className='post'>
                
                    
                <div className='score'>
                    <VscChevronUp  

                        onClick = {OnIncrementClick} 
                        style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}} 
                    />
                    <p>{count}</p>
                    <VscChevronDown 
                        onClick = {OnDecrementClick}
                        style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}}
                    />
                </div>
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
                    <div className='username'><Link style={navStyle} to = {{
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
