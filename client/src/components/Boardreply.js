import {Link} from 'react-router-dom'
const Boardreply = (props) => {

    const navStyle = {
        color: '#535252',
        textDecoration: 'none',
    }

    return (
        <li key = {props.index}>
            <div className='board-post'>
                <div className='reply'>
                    reply to OP
                </div>
                <p>
                    {props.body}
                </p>
                <div className='username'>
                    <Link style = {navStyle} to = {{
                        pathname: `/profile/${props.poster_username}`
                    }}>
                        {props.poster_username}
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default Boardreply
