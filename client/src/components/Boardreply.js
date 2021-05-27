
const Boardreply = (props) => {
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
                    {props.poster_username}
                </div>
            </div>
        </li>
    )
}

export default Boardreply
