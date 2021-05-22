import React from 'react'

const Reply = () => {
    return (
        <div className="reply-form">
            <div className="reply">in reply to username</div>
            <form>
                <input type="text" placeholder="Enter your reply here" className="post-body"></input>
                <input type="submit" class="reply-btn"></input>
            </form>
            <p>cancel</p>
        </div>
    )
}

export default Reply
